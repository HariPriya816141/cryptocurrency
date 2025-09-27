import React from "react";
import UseCryptoCoins from "../../../hooks/UseCryptoCoins";
import { Card } from "antd";
import { Statistic } from "antd";
import millify from "millify";

const GlobalStats = () => {
  const { globalStats, isLoading, isError } = UseCryptoCoins();
  console.log("gs", globalStats);
  const {
    totalCoins,
    totalExchanges,
    totalMarketCap,
    totalMarkets,
    total24hVolume,
  } = globalStats;

  return (
    <div className="container">
      <div className="row my-2">
        {/* total coins */}
        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
          <Card variant="borderless" loading={isLoading} className="shadow">
            <Statistic
              title="Total_coins"
              value={millify(totalCoins)}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </div>
        {/* total24hvolume */}
        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
          <Card variant="borderless" loading={isLoading} className="shadow">
            <Statistic
              title="Total24hVolumes"
              value={millify(total24hVolume)}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </div>
        {/* totalExchanges */}
        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
          <Card variant="borderless" loading={isLoading} className="shadow">
            <Statistic
              title="TotalExchanges"
              value={millify(totalExchanges)}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </div>
        {/* totalMarketCap */}
        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
          <Card variant="borderless" loading={isLoading} className="shadow">
            <Statistic
              title="TotalMarketCap"
              value={millify(totalMarketCap)}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </div>
        {/* totalMarkets */}
      </div>
    </div>
  );
};

export default GlobalStats;
