"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleLauncherABI = void 0;
exports.SaleLauncherABI = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_factory',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'sale',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'templateId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
            },
        ],
        name: 'SaleInitialized',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'sale',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'templateId',
                type: 'uint256',
            },
        ],
        name: 'SaleLaunched',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'template',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'templateId',
                type: 'uint256',
            },
        ],
        name: 'TemplateAdded',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'template',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'templateId',
                type: 'uint256',
            },
        ],
        name: 'TemplateRemoved',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_template',
                type: 'address',
            },
        ],
        name: 'addTemplate',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_templateId',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_token',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_tokenSupply',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_tokenSupplier',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'createSale',
        outputs: [
            {
                internalType: 'address',
                name: 'newSale',
                type: 'address',
            },
        ],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'factory',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_tokenSupply',
                type: 'uint256',
            },
        ],
        name: 'getDepositAmountWithFees',
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
                internalType: 'uint256',
                name: '_templateId',
                type: 'uint256',
            },
        ],
        name: 'getTemplate',
        outputs: [
            {
                internalType: 'address',
                name: 'template',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_template',
                type: 'address',
            },
        ],
        name: 'getTemplateId',
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
        name: 'numberOfSales',
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
                internalType: 'uint256',
                name: '_templateId',
                type: 'uint256',
            },
        ],
        name: 'removeTemplate',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'saleInfo',
        outputs: [
            {
                internalType: 'bool',
                name: 'exists',
                type: 'bool',
            },
            {
                internalType: 'uint64',
                name: 'templateId',
                type: 'uint64',
            },
            {
                internalType: 'uint128',
                name: 'index',
                type: 'uint128',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'saleTemplateId',
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
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'sales',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
//# sourceMappingURL=SaleLauncher.js.map