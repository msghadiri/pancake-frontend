import { multicallAddresses } from '@pancakeswap/multicall'
import { masterChefAddresses , masterChefV3Addresses } from '@pancakeswap/farms'
import { DEPLOYER_ADDRESSES } from '@pancakeswap/v3-sdk'
import { V3_QUOTER_ADDRESSES } from '@pancakeswap/smart-router/evm'

export default {
  masterChef: masterChefAddresses,
  masterChefV3: masterChefV3Addresses,
  masterChefV1: {
    97: '0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9',
    56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
  },
  sousChef: {},
  lotteryV2: {},
  multiCall: multicallAddresses,
  pancakeProfile: {},
  pancakeBunnies: {},
  bunnyFactory: {},
  claimRefund: {},
  pointCenterIfo: {},
  bunnySpecial: {},
  tradingCompetitionEaster: {},
  tradingCompetitionFanToken: {},
  tradingCompetitionMobox: {},
  tradingCompetitionMoD: {},
  easterNft: {},
  cakeVault: {},
  cakeFlexibleSideVault: {},
  predictionsBNB: {},
  predictionsICE: {},
  chainlinkOracleBNB: {},
  chainlinkOracleICE: {},
  predictionsV1: {},
  bunnySpecialCakeVault: {},
  bunnySpecialPrediction: {},
  bunnySpecialLottery: {},
  bunnySpecialXmas: {},
  farmAuction: {},
  AnniversaryAchievement: {},
  nftMarket: {},
  nftSale: {},
  pancakeSquad: {},
  potteryDraw: {},
  zap: {},
  stableSwapNativeHelper: {},
  iCake: {},
  bCakeFarmBooster: {},
  bCakeFarmBoosterProxyFactory: {},
  nonBscVault: {},
  crossFarmingSender: {},
  crossFarmingReceiver: {},
  mmLinkedPool: {},
  tradingReward: {},
  nftPositionManager: {
    1: '0x46A15B0b27311cedF172AB29E4f4766fbE7F4364',
    5: '0x427bF5b37357632377eCbEC9de3626C71A5396c1',
    56: '0x46A15B0b27311cedF172AB29E4f4766fbE7F4364',
    97: '0x427bF5b37357632377eCbEC9de3626C71A5396c1',
    1116: '0xa6C4B4536E1182eE2691FCba7ABee54C456ed196',
  },
  v3PoolDeployer: DEPLOYER_ADDRESSES,
  v3Migrator: {
    1: '0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2',
    5: '0x46A15B0b27311cedF172AB29E4f4766fbE7F4364',
    56: '0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2',
    97: '0x46A15B0b27311cedF172AB29E4f4766fbE7F4364',
    1116: '0x39135bD1FD3A04381C1094AB0Dd35c7bbe61b3C5'
  },
  quoter: V3_QUOTER_ADDRESSES,
  v3Airdrop: {},
} as const satisfies Record<string, Record<number, `0x${string}`>>
