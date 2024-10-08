export const AUCTION_CONTRACT = {
  "contractName": "ERC1155Auction",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "auctionEndPeriod",
          "type": "uint64"
        }
      ],
      "name": "AuctionPeriodUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftSeller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "nftHighestBid",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftHighestBidder",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "auctionSettler",
          "type": "address"
        }
      ],
      "name": "AuctionSettled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftOwner",
          "type": "address"
        }
      ],
      "name": "AuctionWithdrawn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "bidder",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "ethAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "erc20Token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenAmount",
          "type": "uint256"
        }
      ],
      "name": "BidMade",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "highestBidder",
          "type": "address"
        }
      ],
      "name": "BidWithdrawn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "newBuyNowPrice",
          "type": "uint128"
        }
      ],
      "name": "BuyNowPriceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "HighestBidTaken",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMinPrice",
          "type": "uint256"
        }
      ],
      "name": "MinimumPriceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftSeller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "nftHighestBid",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftHighestBidder",
          "type": "address"
        }
      ],
      "name": "NFTTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftSeller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "erc20Token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "minPrice",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "buyNowPrice",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "auctionBidPeriod",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "bidIncreasePercentage",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "feeRecipients",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "uint32[]",
          "name": "feePercentages",
          "type": "uint32[]"
        }
      ],
      "name": "NftAuctionCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "amountOfToken",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftSeller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "erc20Token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "buyNowPrice",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "whitelistedBuyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "feeRecipients",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "uint32[]",
          "name": "feePercentages",
          "type": "uint32[]"
        }
      ],
      "name": "SaleCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newWhitelistedBuyer",
          "type": "address"
        }
      ],
      "name": "WhitelistedBuyerUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "auctions",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "amountOfToken",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "bidIncreasePercentage",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "auctionBidPeriod",
          "type": "uint32"
        },
        {
          "internalType": "uint64",
          "name": "auctionEnd",
          "type": "uint64"
        },
        {
          "internalType": "uint128",
          "name": "minPrice",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "buyNowPrice",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "nftHighestBid",
          "type": "uint128"
        },
        {
          "internalType": "address",
          "name": "nftHighestBidder",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "nftSeller",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "whitelistedBuyer",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "ERC20Token",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isSettled",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "defaultAuctionBidPeriod",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "defaultBidIncreasePercentage",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "failedERC20TransferCredits",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "failedTransferCredits",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "maximumMinPricePercentage",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "minimumSettableIncreasePercentage",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155BatchReceived",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "usersERC20Credits",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint32",
          "name": "_amountOfToken",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "_erc20Token",
          "type": "address"
        },
        {
          "internalType": "uint128",
          "name": "_minPrice",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "_buyNowPrice",
          "type": "uint128"
        },
        {
          "internalType": "uint32",
          "name": "_auctionBidPeriod",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "_bidIncreasePercentage",
          "type": "uint32"
        },
        {
          "internalType": "address[]",
          "name": "_feeRecipients",
          "type": "address[]"
        },
        {
          "internalType": "uint32[]",
          "name": "_feePercentages",
          "type": "uint32[]"
        }
      ],
      "name": "createNewNftAuction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint32",
          "name": "_amountOfToken",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "_erc20Token",
          "type": "address"
        },
        {
          "internalType": "uint128",
          "name": "_buyNowPrice",
          "type": "uint128"
        },
        {
          "internalType": "address",
          "name": "_whitelistedBuyer",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "_feeRecipients",
          "type": "address[]"
        },
        {
          "internalType": "uint32[]",
          "name": "_feePercentages",
          "type": "uint32[]"
        }
      ],
      "name": "createSale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_erc20Token",
          "type": "address"
        },
        {
          "internalType": "uint128",
          "name": "_tokenAmount",
          "type": "uint128"
        }
      ],
      "name": "makeBid",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "settleAuction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "settleAuctionFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "withdrawAuction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "withdrawAsset",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "withdrawBid",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_newWhitelistedBuyer",
          "type": "address"
        }
      ],
      "name": "updateWhitelistedBuyer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint128",
          "name": "_newMinPrice",
          "type": "uint128"
        }
      ],
      "name": "updateMinimumPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint128",
          "name": "_newBuyNowPrice",
          "type": "uint128"
        }
      ],
      "name": "updateBuyNowPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "takeHighestBid",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOfNFT",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "withdrawAllFailedCredits",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "erc20Address",
          "type": "address"
        }
      ],
      "name": "withdrawUserCredits",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_erc20Address",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "addUserCredits",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "rescueToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
};