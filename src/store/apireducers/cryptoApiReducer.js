import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


//crypto headers (helps servers to identify person or app making request to server)
let headers = {
  "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
  "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST,
};

let baseUrl = import.meta.env.VITE_RAPID_API_URL


//creating request to the backend
let createRequest = (url) => ({url, headers:headers})

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: "cryptoapi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getCryptoCoins: build.query({
      query: () => createRequest("/coins"),
    }),
       getCryptoStats: build.query({
      query: () => createRequest("/stats"),
    }),
      getCoinDetails: build.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
       getCoinHistory: build.query({
      query: ({coinId, timePeriod="24h"}) => createRequest(`/coin/${coinId}/history?&timePeriod=${timePeriod}`),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptoCoinsQuery, useGetCryptoStatsQuery, useGetCoinDetailsQuery, useGetCoinHistoryQuery } = cryptoApi;
