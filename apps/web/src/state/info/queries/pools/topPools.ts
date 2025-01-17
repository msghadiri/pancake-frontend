import { gql } from 'graphql-request'
import { useEffect, useState } from 'react'
import { getDeltaTimestamps } from 'utils/getDeltaTimestamps'
import {
  checkIsStableSwap,
  getMultiChainQueryEndPointWithStableSwap,
  MultiChainName,
  multiChainTokenBlackList,
} from '../../constant'
import { useGetChainName } from '../../hooks'

interface TopPoolsResponse {
  pairDayDatas: {
    id: string
  }[]
}

/**
 * Initial pools to display on the home page
 */
const fetchTopPools = async (chainName: MultiChainName, timestamp24hAgo: number): Promise<string[]> => {
  const isStableSwap = checkIsStableSwap()
  let whereCondition = `where: { token0_not_in: $blacklist, token1_not_in: $blacklist, date_gt: ${timestamp24hAgo} }` // `where: { dailyVolumeUSD_gt: 10, token0_not_in: $blacklist, token1_not_in: $blacklist, date_gt: ${timestamp24hAgo} }`
  if (isStableSwap) whereCondition = ''
  try {
    const query = gql`
      query topPools($blacklist: [String!]) {
        pairDayDatas(
          first: 30
          ${whereCondition}
          orderBy: dailyVolumeUSD
          orderDirection: desc
        ) {
          id
        }
      }
    `
    const data = await getMultiChainQueryEndPointWithStableSwap(chainName).request<TopPoolsResponse>(query, {
      blacklist: multiChainTokenBlackList[chainName],
    })
    // pairDayDatas id has compound id "0xPOOLADDRESS-NUMBERS", extracting pool address with .split('-')
    return data.pairDayDatas.map((p) => p.id.split('-')[0])
  } catch (error) {
    console.error('Failed to fetch top pools', error)
    return []
  }
}

/**
 * Fetch top addresses by volume
 */
const useTopPoolAddresses = (): string[] => {
  const [topPoolAddresses, setTopPoolAddresses] = useState([])
  const [timestamp24hAgo] = getDeltaTimestamps()
  const chainName = useGetChainName()

  useEffect(() => {
    const fetch = async () => {
      const addresses = await fetchTopPools(chainName, timestamp24hAgo)
      setTopPoolAddresses(addresses)
    }
    if (topPoolAddresses.length === 0) {
      fetch()
    }
  }, [topPoolAddresses, timestamp24hAgo, chainName])

  return topPoolAddresses
}

export const fetchTopPoolAddresses = async (chainName: MultiChainName) => {
  const [timestamp24hAgo] = getDeltaTimestamps()

  return fetchTopPools(chainName, timestamp24hAgo)
}

export default useTopPoolAddresses
