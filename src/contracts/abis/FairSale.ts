export const FairSaleABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint96',
        name: 'soldTokenOuts',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'soldTokenIns',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'clearingPriceOrder',
        type: 'bytes32',
      },
    ],
    name: 'AuctionCleared',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IERC20',
        name: 'tokenOut',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'contract IERC20',
        name: 'tokenIn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'orderCancellationEndDate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'auctionEndDate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'userId',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'auctionedSellAmount',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'minBuyAmount',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minimumBiddingAmountPerOrder',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minFundingThreshold',
        type: 'uint256',
      },
    ],
    name: 'AuctionInitialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'userId',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'buyAmount',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'sellAmount',
        type: 'uint96',
      },
    ],
    name: 'CancellationSellOrder',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'userId',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'buyAmount',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'sellAmount',
        type: 'uint96',
      },
    ],
    name: 'ClaimedFromOrder',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'userId',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'buyAmount',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'sellAmount',
        type: 'uint96',
      },
    ],
    name: 'NewSellOrder',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'userId',
        type: 'uint64',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'userAddress',
        type: 'address',
      },
    ],
    name: 'NewUser',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'userId',
        type: 'uint64',
      },
    ],
    name: 'UserRegistration',
    type: 'event',
  },
  {
    inputs: [],
    name: 'TEMPLATE_NAME',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'auctionEndDate',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: '_sellOrders',
        type: 'bytes32[]',
      },
    ],
    name: 'cancelSellOrders',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'orders',
        type: 'bytes32[]',
      },
    ],
    name: 'claimFromParticipantOrder',
    outputs: [
      {
        internalType: 'uint256',
        name: 'sumTokenOutAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'sumTokenInAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'clearingPriceOrder',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'order',
        type: 'bytes32',
      },
    ],
    name: 'containsOrder',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getSecondsRemainingInBatch',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getUserId',
    outputs: [
      {
        internalType: 'uint64',
        name: 'userId',
        type: 'uint64',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialAuctionOrder',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialized',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'interimOrder',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'interimSumBidAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isAtomicClosureAllowed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minFundingThreshold',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minFundingThresholdNotReached',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minimumBiddingAmountPerOrder',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'numUsers',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'orderCancellationEndDate',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint96[]',
        name: '_minBuyAmounts',
        type: 'uint96[]',
      },
      {
        internalType: 'uint96[]',
        name: '_sellAmounts',
        type: 'uint96[]',
      },
      {
        internalType: 'bytes32[]',
        name: '_prevSellOrders',
        type: 'bytes32[]',
      },
    ],
    name: 'placeSellOrders',
    outputs: [
      {
        internalType: 'uint64',
        name: 'userId',
        type: 'uint64',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint96[]',
        name: '_minBuyAmounts',
        type: 'uint96[]',
      },
      {
        internalType: 'uint96[]',
        name: '_sellAmounts',
        type: 'uint96[]',
      },
      {
        internalType: 'bytes32[]',
        name: '_prevSellOrders',
        type: 'bytes32[]',
      },
      {
        internalType: 'address',
        name: 'orderSubmitter',
        type: 'address',
      },
    ],
    name: 'placeSellOrdersOnBehalf',
    outputs: [
      {
        internalType: 'uint64',
        name: 'userId',
        type: 'uint64',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'iterationSteps',
        type: 'uint256',
      },
    ],
    name: 'precalculateSellAmountSum',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'registerUser',
    outputs: [
      {
        internalType: 'uint64',
        name: 'userId',
        type: 'uint64',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'settleAuction',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'clearingOrder',
        type: 'bytes32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint96[]',
        name: '_minBuyAmount',
        type: 'uint96[]',
      },
      {
        internalType: 'uint96[]',
        name: '_sellAmount',
        type: 'uint96[]',
      },
      {
        internalType: 'bytes32[]',
        name: '_prevSellOrder',
        type: 'bytes32[]',
      },
    ],
    name: 'settleAuctionAtomically',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenIn',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenOut',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'volumeClearingPriceOrder',
    outputs: [
      {
        internalType: 'uint96',
        name: '',
        type: 'uint96',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
