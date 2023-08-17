import config from "../config";
import { FACTORY_CONTRACT } from "../contracts-abi/NFTFactory";
import { AUCTION_CONTRACT } from "../contracts-abi/NFTAuction";
import { NFT_CONTRACT } from "../contracts-abi/NFTToken";
import { createContractObject, createWeb3Object, getConnectedWalletAddress } from "./web3-services";
import { getTokenInfo } from "./web3-token-services";

const factoryContractAdd = config.factoryContract;
const auctionContractAdd = config.auctionContract;

export const deployERC1155 = async function (_contractName, _metaurl, _ids, _amounts, _names) {
  try {
    const web3Obj = await createWeb3Object()
    const deployContract = await createContractObject(
      web3Obj,
      FACTORY_CONTRACT.abi,
      factoryContractAdd
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );
    let deployedContract = await deployContract.methods
      .deployERC1155(_contractName, _metaurl, _ids, _amounts, _names)
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });
    return deployedContract;
  } catch (error) {
    console.log("Error| deployERC1155", error);
    throw new Error("Error while deploying deployERC1155.");
  }
};

export const getAssetAuction = async function (_contractAdd, _tokenId) {
  try {
    const web3Obj = await createWeb3Object()
    const auctionContract = await createContractObject(
      web3Obj,
      AUCTION_CONTRACT.abi,
      auctionContractAdd
    );
    let auctionsInfo = await auctionContract.methods
      .auctions(_contractAdd, _tokenId).call()

    console.log("auctionsInfo: ", auctionsInfo)
    return auctionsInfo;
  } catch (error) {
    console.log("Error| getAssetAuction", error);
    throw new Error("Error while getting auctions.");
  }
};

export const getUserERC20Balance = async function (_contractAdd) {
  try {
    const web3Obj = await createWeb3Object()
    const auctionContract = await createContractObject(
      web3Obj,
      AUCTION_CONTRACT.abi,
      auctionContractAdd
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );
    let tokenInfo = await auctionContract.methods
      .usersERC20Credits(walletAddress, _contractAdd).call()

    console.log("token Info: ", tokenInfo)
    return tokenInfo;
  } catch (error) {
    console.log("Error| getUserERC20Balance", error);
    throw new Error("Error while getting users ERC20 credit.");
  }
};

export const approveERC1155token = async function (_nftAddress, _toAddress) {
  try {
    const web3Obj = await createWeb3Object()
    const nftContract = await createContractObject(
      web3Obj,
      NFT_CONTRACT.abi,
      _nftAddress
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );

    let approve = await nftContract.methods
      .setApprovalForAll(_toAddress, true)
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

    return approve;
  } catch (error) {
    console.log("Error| NFT Approve", error);
    throw new Error("Error while approving asset.");
  }
}

export const revokeERC1155token = async function (_nftAddress, _toAddress) {
  try {
    const web3Obj = await createWeb3Object()
    const nftContract = await createContractObject(
      web3Obj,
      NFT_CONTRACT.abi,
      _nftAddress
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );

    let revoke = await nftContract.methods
      .setApprovalForAll(_toAddress, false)
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

    return revoke;
  } catch (error) {
    console.log("Error| NFT Revoke", error);
    throw new Error("Error while revoking the access.");
  }
}

export const createAuction = async function (_nftAddress, _tokenId, _amountOfTok,
  _erc20Token, _minPrice, _buyPrice, _bidPeriod, _bidIncPerc, _feeReceivers, _feePerc) {
  try {
    const web3Obj = await createWeb3Object()
    const auctionContract = await createContractObject(
      web3Obj,
      AUCTION_CONTRACT.abi,
      auctionContractAdd
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );

    if (_erc20Token) {
      let [decimals, symbol] = await getTokenInfo(_erc20Token)
      _minPrice = _minPrice * Math.pow(10, decimals)
      _buyPrice = _buyPrice * Math.pow(10, decimals)
    } else {
      _minPrice = _minPrice * Math.pow(10, config.tokenDecimals)
      _buyPrice = _buyPrice * Math.pow(10, config.tokenDecimals)
    }

    let auction = await auctionContract.methods
      .createNewNftAuction(_nftAddress, _tokenId, _amountOfTok,
        _erc20Token, _minPrice.toString(), _buyPrice.toString(), _bidPeriod, _bidIncPerc, _feeReceivers, _feePerc)
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

    return auction;
  } catch (error) {
    console.log("Error| create Auction", error);
    throw new Error("Error while creating auction.");
  }
};

export const createSale = async function (_nftAddress, _tokenId, _amountOfTok,
  _erc20Token, _price, _buyer, _feeReceivers, _feePerc) {
  try {
    const web3Obj = await createWeb3Object()
    const auctionContract = await createContractObject(
      web3Obj,
      AUCTION_CONTRACT.abi,
      auctionContractAdd
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );

    if (_erc20Token) {
      let [decimals, symbol] = await getTokenInfo(_erc20Token)
      console.log("[decimals, symbol]: ", decimals, symbol)

      _price = _price * Math.pow(10, decimals)
    } else {
      _price = _price * Math.pow(10, config.tokenDecimals)
    }

    console.log(_nftAddress + " - " + _tokenId + " - " + _amountOfTok + " - " + _erc20Token
      + " - " + _price.toString() + " - " + _buyer + " - " + _feeReceivers + " - " + _feePerc)
    let sale = await auctionContract.methods
      .createSale(_nftAddress, _tokenId, _amountOfTok, _erc20Token, _price.toString(), _buyer, _feeReceivers, _feePerc)
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

    return sale;
  } catch (error) {
    console.log("Error| create Sale", error);
    throw new Error("Error while creating sale.");
  }
};

export const makeAuctionBid = async function (_nftAddress, _tokenId, _erc20Token, _bidAmount) {
  try {
    const web3Obj = await createWeb3Object()
    const auctionContract = await createContractObject(
      web3Obj,
      AUCTION_CONTRACT.abi,
      auctionContractAdd
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );

    if (_erc20Token) {
      let [decimals, symbol] = await getTokenInfo(_erc20Token)
      console.log("[decimals, symbol]: ", decimals, symbol)
      _bidAmount = _bidAmount * Math.pow(10, decimals)
    } else {
      _bidAmount = _bidAmount * Math.pow(10, config.tokenDecimals)
    }

    let sale = await auctionContract.methods
      .makeBid(_nftAddress, _tokenId, _erc20Token, _bidAmount.toString())
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

    return sale;
  } catch (error) {
    console.log("Error| create Sale", error);
    throw new Error("Error while creating sale.");
  }
};

export const auctionTakeHighestBid = async function (_nftAddress, _tokenId) {
  try {
    const web3Obj = await createWeb3Object()
    const auctionContract = await createContractObject(
      web3Obj,
      AUCTION_CONTRACT.abi,
      auctionContractAdd
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );

    let accept = await auctionContract.methods
      .takeHighestBid(_nftAddress, _tokenId)
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

    return accept;
  } catch (error) {
    console.log("Error| on auction accept highest bid", error);
    throw new Error("Error on auction accept highest bid.");
  }
};

export const auctionWithdraw = async function (_nftAddress, _tokenId) {
  try {
    const web3Obj = await createWeb3Object()
    const auctionContract = await createContractObject(
      web3Obj,
      AUCTION_CONTRACT.abi,
      auctionContractAdd
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );

    let withdraw = await auctionContract.methods
      .withdrawAuction(_nftAddress, _tokenId)
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

    return withdraw;
  } catch (error) {
    console.log("Error| auction withdraw", error);
    throw new Error("Error while auction withdraw.");
  }
};

export const bidWithdraw = async function (_nftAddress, _tokenId) {
  try {
    const web3Obj = await createWeb3Object()
    const auctionContract = await createContractObject(
      web3Obj,
      AUCTION_CONTRACT.abi,
      auctionContractAdd
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );

    let withdraw = await auctionContract.methods
      .withdrawBid(_nftAddress, _tokenId)
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

    return withdraw;
  } catch (error) {
    console.log("Error| auction withdraw BID amoutn", error);
    throw new Error("Error while auction withdraw BID amount.");
  }
};


export const auctionSettleFunds = async function (_nftAddress, _tokenId) {
  try {
    const web3Obj = await createWeb3Object()
    const auctionContract = await createContractObject(
      web3Obj,
      AUCTION_CONTRACT.abi,
      auctionContractAdd
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );

    let accept = await auctionContract.methods
      .settleAuctionFunds(_nftAddress, _tokenId)
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

    return accept;
  } catch (error) {
    console.log("Error| on auction settle funds", error);
    throw new Error("Error on auction settle funds.");
  }
};

export const rescueERC20Funds = async function (_tokenAddress, _amount) {
  try {
    const web3Obj = await createWeb3Object()
    const auctionContract = await createContractObject(
      web3Obj,
      AUCTION_CONTRACT.abi,
      auctionContractAdd
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );

    let [decimals, symbol] = await getTokenInfo(_tokenAddress)
    console.log("[decimals, symbol]: ", decimals, symbol)
    _amount = _amount * Math.pow(10, decimals)

    let accept = await auctionContract.methods
      .rescueToken(_tokenAddress, _amount.toString())
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

    return accept;
  } catch (error) {
    console.log("Error| on auction settle funds", error);
    throw new Error("Error on auction settle funds.");
  }
};

