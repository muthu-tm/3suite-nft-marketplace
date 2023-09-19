import { TOKEN_CONTRACT } from "../contracts-abi/Token";
import { NFT_CONTRACT } from "../contracts-abi/NFTToken";
import { createContractObject, createWeb3Object, getConnectedWalletAddress } from "./web3-services";

export const getTokenInfo = async function(_tokenAddress) {
  const web3Obj = await createWeb3Object()
  const tokenContract = await createContractObject(
    web3Obj,
    TOKEN_CONTRACT.abi,
    _tokenAddress
  );

  let decimals = await tokenContract.methods.decimals().call();
  let symbol = await tokenContract.methods.symbol().call();
  return [decimals, symbol];
};

export const getTokenContract = async function(_tokenAddress) {
  const web3Obj = await createWeb3Object()
  const tokenContract = await createContractObject(
    web3Obj,
    TOKEN_CONTRACT.abi,
    _tokenAddress
  );

  return tokenContract;
};

export const increaseERC20Allowance = async function (_tokenAddress, _toAddress, _amount) {
  try {
    const web3Obj = await createWeb3Object()
    const nftContract = await createContractObject(
      web3Obj,
      TOKEN_CONTRACT.abi,
      _tokenAddress
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );

    let [decimals, symbol] = await getTokenInfo(_tokenAddress)
    _amount = _amount * Math.pow(10, decimals)

    let approve = await nftContract.methods
      .increaseAllowance(_toAddress, _amount.toString())
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

    return approve;
  } catch (error) {
    console.log("Error| ERC20 Approve token", error);
    throw new Error("Error while increasing the token allowance.");
  }
}

export const decreaseERC20Allowance = async function (_tokenAddress, _toAddress, _amount) {
  try {
    const web3Obj = await createWeb3Object()
    const nftContract = await createContractObject(
      web3Obj,
      NFT_CONTRACT.abi,
      _tokenAddress
    );
    let walletAddress = await getConnectedWalletAddress(
      web3Obj,
      localStorage.getItem("wallet_type")
    );

    let [decimals, symbol] = await getTokenInfo(_tokenAddress)
    _amount = _amount * Math.pow(10, decimals)
    let revoke = await nftContract.methods
      .decreaseAllowance(_toAddress, _amount.toString())
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

    return revoke;
  } catch (error) {
    console.log("Error| ERC20 Reduce allowance", error);
    throw new Error("Error while reducing the allwance amount.");
  }
}
