import React from 'react'
import { useGetCryptoStatsQuery } from '../store/apireducers/cryptoApiReducer'

const UseCryptoStats = () => {
    const {data, isLoading, isError} = useGetCryptoStatsQuery();
    console.log("data", data);
    const {bestCoins, newestCoins} = data?.data || [];
  return {bestCoins, newestCoins, isLoading, isError}
}

export default UseCryptoStats
