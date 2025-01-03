export const IDOPool = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_WETH",
        type: "address",
        internalType: "address",
      },
      {
        name: "_AOI_DEX_FACTORY",
        type: "address",
        internalType: "address",
      },
      {
        name: "_AOI_DEX_ROUTER",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "AOI_DEX_FACTORY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "AOI_DEX_ROUTER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MIN_DELAY_STARTING",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint112",
        internalType: "uint112",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MIN_PRICE_TOKEN",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MIN_PRIVATE_SALES_ENDING",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint112",
        internalType: "uint112",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MIN_WETH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "POOL_OWNER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "RATE_DECIMALS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "WETH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "WHITELISTED",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "cancelInvestment",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "cancelRegisterPrivatePool",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claimToken",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getHasListedDex",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getLiquidityTokenAmount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getLiquidityWETH9Amount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolDetails",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IIDOPool.IDOPoolDetails",
        components: [
          {
            name: "tokenAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "pricePerToken",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "raisedAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "raisedTokenAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "softCap",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "hardCap",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "minInvest",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "maxInvest",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "liquidityWETH9",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "liquidityToken",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "privateSaleAmount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolEndTime",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolHardCap",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolMaxInvest",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolMinInvest",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolOwner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolRaisedAmount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolSoftCap",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolSoftCapReached",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolStartTime",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolTime",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IIDOPool.IDOTime",
        components: [
          {
            name: "startTime",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "endTime",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "startPublicSale",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolTokenAddress",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolTokenAmount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolType",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum IIDOPool.IDOType",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPricePerToken",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTimeLeftEnding",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getUserDepositAmount",
    inputs: [
      {
        name: "_address",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_poolDetail",
        type: "tuple",
        internalType: "struct IIDOPool.IDOPoolDetails",
        components: [
          {
            name: "tokenAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "pricePerToken",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "raisedAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "raisedTokenAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "softCap",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "hardCap",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "minInvest",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "maxInvest",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "liquidityWETH9",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "liquidityToken",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "privateSaleAmount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        name: "_poolTime",
        type: "tuple",
        internalType: "struct IIDOPool.IDOTime",
        components: [
          {
            name: "startTime",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "endTime",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "startPublicSale",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        name: "_POOL_OWNER",
        type: "address",
        internalType: "address",
      },
      {
        name: "_WHITELISTED",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_PRIVATE_SALE",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "investPool",
    inputs: [
      {
        name: "proof",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "isPoolActive",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isRegistered",
    inputs: [
      {
        name: "_address",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "listInDex",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "liquidityPoolAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "lpAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "refundToken",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registerPrivatePool",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registers",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawRemainingToken",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    name: "CanceledPrivatePoolRegistration",
    inputs: [
      {
        name: "investor",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "IDOPoolClaimed",
    inputs: [
      {
        name: "investor",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "IDOPoolCreated",
    inputs: [
      {
        name: "poolOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "poolId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "pricePerToken",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "startTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "endTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "IDOPoolInvested",
    inputs: [
      {
        name: "investor",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "IDOPoolInvestmentCanceled",
    inputs: [
      {
        name: "investor",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "IDOPoolListed",
    inputs: [
      {
        name: "tokenAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "liquidityPool",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "liquidityWETHAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "liquidityTokenAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "lpTokenAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "IDOPoolRefunded",
    inputs: [
      {
        name: "investor",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "IDOPoolWithdrawn",
    inputs: [
      {
        name: "tokenAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "ethAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "IdoPoolInitialized",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RegisteredPrivatePool",
    inputs: [
      {
        name: "investor",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AlreadyListedDex",
    inputs: [],
  },
  {
    type: "error",
    name: "AlreadyWhitelisted",
    inputs: [],
  },
  {
    type: "error",
    name: "HardCapExceeded",
    inputs: [],
  },
  {
    type: "error",
    name: "IDOIsAlreadyPublicSale",
    inputs: [],
  },
  {
    type: "error",
    name: "IDOIsAlreadyStarted",
    inputs: [],
  },
  {
    type: "error",
    name: "IDOIsEnded",
    inputs: [],
  },
  {
    type: "error",
    name: "IDOIsNotEnded",
    inputs: [],
  },
  {
    type: "error",
    name: "IDOIsNotStarted",
    inputs: [],
  },
  {
    type: "error",
    name: "IDOPoolHasWithdrawn",
    inputs: [],
  },
  {
    type: "error",
    name: "IDOPoolInitialized",
    inputs: [],
  },
  {
    type: "error",
    name: "IDOPoolIsPrivate",
    inputs: [],
  },
  {
    type: "error",
    name: "IDOPoolIsPrivateForWhitelisted",
    inputs: [],
  },
  {
    type: "error",
    name: "IDOPoolIsPublic",
    inputs: [],
  },
  {
    type: "error",
    name: "IDOPoolNotInitialized",
    inputs: [],
  },
  {
    type: "error",
    name: "IDOPoolStillActive",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidLiquidityAmount",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPoolDelayTime",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPoolHardCap",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPoolId",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPoolMaxInvestment",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPoolMinInvestment",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPoolSoftCap",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPoolStartPublicSale",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPoolTimeFrame",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPrivateSaleAmount",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidTokenForSale",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidTokenPrice",
    inputs: [],
  },
  {
    type: "error",
    name: "InvestorAlreadyRegistered",
    inputs: [],
  },
  {
    type: "error",
    name: "InvestorClaimed",
    inputs: [],
  },
  {
    type: "error",
    name: "InvestorNotRegisteredYet",
    inputs: [],
  },
  {
    type: "error",
    name: "MaxInvestmentExceeded",
    inputs: [],
  },
  {
    type: "error",
    name: "MinInvestmentNotReached",
    inputs: [],
  },
  {
    type: "error",
    name: "NotEnoughBalance",
    inputs: [],
  },
  {
    type: "error",
    name: "NotListedDex",
    inputs: [],
  },
  {
    type: "error",
    name: "NotPoolOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "NotPoolOwnerOrFactory",
    inputs: [],
  },
  {
    type: "error",
    name: "NotWhilelisted",
    inputs: [],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "PrivateSaleExceeded",
    inputs: [],
  },
  {
    type: "error",
    name: "ReentrancyGuardReentrantCall",
    inputs: [],
  },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "SoftCapNotReached",
    inputs: [],
  },
  {
    type: "error",
    name: "SoftCapReached",
    inputs: [],
  },
  {
    type: "error",
    name: "ZeroAddress",
    inputs: [],
  },
];
