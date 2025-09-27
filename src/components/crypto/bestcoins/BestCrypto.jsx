import React from "react";
import UseCryptoStats from "../../../hooks/UseCryptoStats";
import AreaGraph from "../../../graphs/AreaGraph";

const BestCrypto = () => {
  const { bestCoins, isLoading, isError } = UseCryptoStats();
  console.log(bestCoins);
  if (isLoading) {
    return <h6>Loading...</h6>;
  }
  if (isError) {
    return <h6>Error...</h6>;
  }
  return (
    <div className="container">
      <div className="row">
{
    bestCoins.map(coins => <AreaGraph key={coins.uuid} coins={coins} />)
}
      </div>
    </div>
  );
};

export default BestCrypto;
