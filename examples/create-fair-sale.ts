import { JsonRpcProvider } from '@ethersproject/providers'
import { utils, ContractFactory, ethers } from 'ethers'

// Example Helpers
import { abi, bytecode } from './artifacts/ERC20Mintable.json'
import { RINKEBY_DAI_ADDRESS, RINKEBY_INFURA_ENDPOINT } from './constants'
// import { getWallets } from './helpers/wallet'
// Deployer credentials
import { pk } from '../secrets.json'
// AquaJS
import { Aqua, RINKEBY_CONFIG } from '../src'
;(async () => {
  // Wrapped XDAI
  // Providers: XDAI or Rinkeby
  const provider = new JsonRpcProvider(RINKEBY_INFURA_ENDPOINT)
  // Connecto xDAI
  // const [saleCreator] = getWallets(mnemonic, provider)
  const saleCreator = new ethers.Wallet(pk, provider)
  // Start aqua instance
  const aqua = new Aqua(RINKEBY_CONFIG, saleCreator)
  const ERC20MintableFactory = new ContractFactory(abi, bytecode, saleCreator)
  // Deploy example tokens
  const mesaToken = await ERC20MintableFactory.deploy('FST', 'Fair Sale Token')
  console.log(`Deployed ${await mesaToken.symbol()} at ${mesaToken.address}`)
  // total tokens for sale is 1000
  const tokenOutSupply = utils.parseEther('50')
  // Mint tokenOutSupply to saleCreator
  await (await mesaToken.mint(saleCreator.address, tokenOutSupply)).wait(3)
  console.log(`Minted ${utils.formatEther(tokenOutSupply)} to ${saleCreator.address}`)
  // Approve saleLauncher by saleCreator
  await (await mesaToken.approve(aqua.saleLauncher.address, ethers.constants.MaxUint256)).wait(3)
  console.log(`Approved aqua.SaleLauncher to spend $${await mesaToken.symbol()}`)
  // Use the last block timestamp to set startDate and endDate
  const lastBlock = await provider.getBlock(await provider.getBlockNumber())
  const startDate = lastBlock.timestamp + 1800 // starts in 3 minutes from current block
  const endDate = startDate + 3600 * 72 // lasts for 72 hours
  // Start deploying the sale via the SDK
  console.log(`Launching new FairSale via AquaFactory`)
  // Create the sale
  const { sale, transactions } = await aqua.createFairSale(
    {
      tokenOut: mesaToken.address,
      tokenIn: RINKEBY_DAI_ADDRESS,
      auctionStartDate: startDate,
      auctionEndDate: endDate,
      orderCancelationPeriodDuration: endDate,
      tokensForSale: utils.parseEther('50'), // 50 FPST tokens for sale
      minRaise: utils.parseEther('5'), // 70% threshold
      minPrice: utils.parseEther('1'), // 70% threshold
      minBuyAmount: utils.parseEther('0.1'),
      minimumBiddingAmountPerOrder: utils.parseEther('0.1'),
      tokenSupplier: saleCreator.address,
    },
    'bafybeibozpgzagp4opgu5ugmja2hpwdnyh675ofi44xobizpyr5gzqrxnu' // Example metadata IPFS hash
  )
  // Logging
  console.log(transactions)
  console.log(sale.address)
})()
