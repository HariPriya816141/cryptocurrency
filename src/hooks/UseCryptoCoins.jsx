import React from 'react'
import { useGetCryptoCoinsQuery } from '../store/apireducers/cryptoApiReducer'

const UseCryptoCoins = () => {
    let {data, isLoading, isError} =  useGetCryptoCoinsQuery();
    let coins = data?.data?.coins || []
    console.log("data " , data);
    let globalStats = data?.data?.stats || {};

  return {coins, globalStats, isLoading, isError}
}

export default UseCryptoCoins
