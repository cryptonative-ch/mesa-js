"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AquaFactoryABI = void 0;
exports.AquaFactoryABI = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_feeManager',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_feeTo',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_templateManager',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_templateFee',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_feeNumerator',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_saleFee',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'feeManager',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'feeTo',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'templateManager',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'templateFee',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'feeNumerator',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'saleFee',
                type: 'uint256',
            },
        ],
        name: 'FactoryInitialized',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'feeManager',
                type: 'address',
            },
        ],
        name: 'FeeManagerUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'feeNumerator',
                type: 'uint256',
            },
        ],
        name: 'FeeNumeratorUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'feeTo',
                type: 'address',
            },
        ],
        name: 'FeeToUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'saleFee',
                type: 'uint256',
            },
        ],
        name: 'SaleFeeUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'templateFee',
                type: 'uint256',
            },
        ],
        name: 'TemplateFeeUpdated',
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
        name: 'TemplateLaunched',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'templateLauncher',
                type: 'address',
            },
        ],
        name: 'TemplateLauncherUpdated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'templateManager',
                type: 'address',
            },
        ],
        name: 'TemplateManagerUpdated',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'allTemplates',
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
        inputs: [],
        name: 'feeDenominator',
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
        name: 'feeManager',
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
        inputs: [],
        name: 'feeNumerator',
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
        name: 'feeTo',
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
        inputs: [
            {
                internalType: 'uint256',
                name: '_templateId',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
            {
                internalType: 'string',
                name: '_metaData',
                type: 'string',
            },
        ],
        name: 'launchTemplate',
        outputs: [
            {
                internalType: 'address',
                name: 'newTemplate',
                type: 'address',
            },
        ],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'numberOfTemplates',
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
        name: 'saleFee',
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
                name: '_feeManager',
                type: 'address',
            },
        ],
        name: 'setFeeManager',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_feeNumerator',
                type: 'uint256',
            },
        ],
        name: 'setFeeNumerator',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_feeTo',
                type: 'address',
            },
        ],
        name: 'setFeeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_saleFee',
                type: 'uint256',
            },
        ],
        name: 'setSaleFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_templateFee',
                type: 'uint256',
            },
        ],
        name: 'setTemplateFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_templateLauncher',
                type: 'address',
            },
        ],
        name: 'setTemplateLauncher',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_templateManager',
                type: 'address',
            },
        ],
        name: 'setTemplateManager',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'templateFee',
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
        name: 'templateId',
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
        name: 'templateLauncher',
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
        inputs: [],
        name: 'templateManager',
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
//# sourceMappingURL=AquaFactory.js.map