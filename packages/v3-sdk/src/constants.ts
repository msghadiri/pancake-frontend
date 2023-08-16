import { ChainId } from '@pancakeswap/sdk'

// export const FACTORY_ADDRESS = '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865'

export const DEPLOYER_ADDRESSES = {
  [ChainId.CORE]: '0xFfD762aA7e5f900E70a2F343e08734D31b38AB70',
} as const satisfies Record<ChainId, string>

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0x4a368fd18f9a1f54d377052fbabd82aa768582b85d80f470018290f3364574a9'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 1000,
  LOW = 3000,
  MEDIUM = 10000,
  HIGH = 50000,
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 20,
  [FeeAmount.LOW]: 60,
  [FeeAmount.MEDIUM]: 200,
  [FeeAmount.HIGH]: 1000,
}
