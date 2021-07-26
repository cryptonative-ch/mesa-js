export const TemplateLauncherABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_factory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_participantListLaucher',
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
        indexed: false,
        internalType: 'bool',
        name: 'allowPublicTemplates',
        type: 'bool',
      },
    ],
    name: 'AllowPublicTemplatesUpdated',
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
      {
        indexed: false,
        internalType: 'address',
        name: 'templateDeployer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'metadataContentHash',
        type: 'string',
      },
    ],
    name: 'TemplateLaunched',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'template',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'newdetaDataContentHash',
        type: 'string',
      },
    ],
    name: 'TemplateMetadataContentHashUpdated',
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
    name: 'TemplateVerified',
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
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'allowPublicTemplates',
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
        name: '_templateId',
        type: 'uint256',
      },
    ],
    name: 'getTemplate',
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
        name: '_metadataContentHash',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_templateDeployer',
        type: 'address',
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
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'launchedTemplate',
    outputs: [
      {
        internalType: 'address',
        name: 'deployer',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'metadataContentHash',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'participantListLaucher',
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
    name: 'templateVerified',
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
    name: 'toggleAllowPublicTemplates',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_template',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_newMetadataContentHash',
        type: 'string',
      },
    ],
    name: 'updateTemplateMetadataContentHash',
    outputs: [],
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
    ],
    name: 'verifyTemplate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
