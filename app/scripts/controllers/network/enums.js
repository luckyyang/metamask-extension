export const ROPSTEN = 'ropsten'
export const RINKEBY = 'rinkeby'
export const KOVAN = 'kovan'
export const MAINNET = 'mainnet'
export const GOERLI = 'goerli'
// elaeth
export const ELAETH_MAINNET = 'elaethmainnet'
export const ELAETH_TESTNET = 'elaethtestnet'
export const LOCALHOST = 'localhost'

export const MAINNET_NETWORK_ID = '1'
export const ROPSTEN_NETWORK_ID = '3'
export const RINKEBY_NETWORK_ID = '4'
export const GOERLI_NETWORK_ID = '5'
export const KOVAN_NETWORK_ID = '42'
// elaeth
export const ELAETH_MAINNET_NETWORK_ID = '1' // the real value is 1
export const ELAETH_TESTNET_NETWORK_ID = '3' // the real value is 3

export const MAINNET_CHAIN_ID = '0x1'
export const ROPSTEN_CHAIN_ID = '0x3'
export const RINKEBY_CHAIN_ID = '0x4'
export const GOERLI_CHAIN_ID = '0x5'
export const KOVAN_CHAIN_ID = '0x2a'
// elaeth
export const ELAETH_MAINNET_CHAIN_ID = '0x1' // the real value is 1
export const ELAETH_TESTNET_CHAIN_ID = '0x3' // the real value is 3

export const ROPSTEN_DISPLAY_NAME = 'Ropsten'
export const RINKEBY_DISPLAY_NAME = 'Rinkeby'
export const KOVAN_DISPLAY_NAME = 'Kovan'
export const MAINNET_DISPLAY_NAME = 'Main Ethereum Network'
// elaeth
export const ELAETH_MAINNET_DISPLAY_NAME = 'Main Ethereum Network(Elastos)'
export const ELAETH_TESTNET_DISPLAY_NAME = 'Test Ethereum Network(Elastos)'
export const GOERLI_DISPLAY_NAME = 'Goerli'

export const INFURA_PROVIDER_TYPES = [
  ROPSTEN,
  RINKEBY,
  KOVAN,
  MAINNET,
  GOERLI,
  // elaeth
  // ELAETH_MAINNET,
  // ELAETH_TESTNET,
]

export const NETWORK_TYPE_TO_ID_MAP = {
  [ROPSTEN]: { networkId: ROPSTEN_NETWORK_ID, chainId: ROPSTEN_CHAIN_ID },
  [RINKEBY]: { networkId: RINKEBY_NETWORK_ID, chainId: RINKEBY_CHAIN_ID },
  [KOVAN]: { networkId: KOVAN_NETWORK_ID, chainId: KOVAN_CHAIN_ID },
  [GOERLI]: { networkId: GOERLI_NETWORK_ID, chainId: GOERLI_CHAIN_ID },
  [MAINNET]: { networkId: MAINNET_NETWORK_ID, chainId: MAINNET_CHAIN_ID },
  // elaeth
  [ELAETH_MAINNET]: { networkId: ELAETH_MAINNET_NETWORK_ID, chainId: ELAETH_MAINNET_CHAIN_ID },
  [ELAETH_TESTNET]: { networkId: ELAETH_TESTNET_NETWORK_ID, chainId: ELAETH_TESTNET_CHAIN_ID },
}

export const NETWORK_TO_NAME_MAP = {
  [ROPSTEN]: ROPSTEN_DISPLAY_NAME,
  [RINKEBY]: RINKEBY_DISPLAY_NAME,
  [KOVAN]: KOVAN_DISPLAY_NAME,
  [MAINNET]: MAINNET_DISPLAY_NAME,
  [GOERLI]: GOERLI_DISPLAY_NAME,
  // elaeth
  [ELAETH_MAINNET]: ELAETH_MAINNET_DISPLAY_NAME,
  [ELAETH_TESTNET]: ELAETH_TESTNET_DISPLAY_NAME,

  [ROPSTEN_NETWORK_ID]: ROPSTEN_DISPLAY_NAME,
  [RINKEBY_NETWORK_ID]: RINKEBY_DISPLAY_NAME,
  [KOVAN_NETWORK_ID]: KOVAN_DISPLAY_NAME,
  [GOERLI_NETWORK_ID]: GOERLI_DISPLAY_NAME,
  [MAINNET_NETWORK_ID]: MAINNET_DISPLAY_NAME,
  // elaeth
  [ELAETH_MAINNET_NETWORK_ID]: ELAETH_MAINNET_DISPLAY_NAME,
  [ELAETH_TESTNET_NETWORK_ID]: ELAETH_TESTNET_DISPLAY_NAME,

  [ROPSTEN_CHAIN_ID]: ROPSTEN_DISPLAY_NAME,
  [RINKEBY_CHAIN_ID]: RINKEBY_DISPLAY_NAME,
  [KOVAN_CHAIN_ID]: KOVAN_DISPLAY_NAME,
  [GOERLI_CHAIN_ID]: GOERLI_DISPLAY_NAME,
  [MAINNET_CHAIN_ID]: MAINNET_DISPLAY_NAME,
  // elaeth
  [ELAETH_MAINNET_CHAIN_ID]: ELAETH_MAINNET_DISPLAY_NAME,
  [ELAETH_TESTNET_CHAIN_ID]: ELAETH_TESTNET_DISPLAY_NAME,
}
