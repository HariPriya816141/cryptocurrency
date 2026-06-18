import React, { useEffect, useState } from "react";
import UseCryptoCoins from "../../../hooks/UseCryptoCoins";
import UseCryptoHistory from "../../../hooks/UseCryptoHistory";
import LineBarGraph from "../../../graphs/LineBarGraph";

let timePeriods = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];
const FilterCard = () => {
  // fetching coins from an Api to display graph based on the coin history
  const { coins, isLoading, isError } = UseCryptoCoins();
  console.log("coins", coins);

  //selecting the default timeperiod
  let [timePeriod, setTimePeriod] = useState("1y");

  //keeping the active tab when users select a coin
  const [selectedTab, setSelectedTab] = useState("");
  console.log("st", selectedTab);

  //getting history of selected coin
  const { history } = UseCryptoHistory(selectedTab, timePeriod);
  console.log("h", history);

  // to keep atleast one tab active when browser is loaded
  useEffect(() => {
    if (coins.length > 0) {
      setSelectedTab(coins[0].uuid);
    }
  }, [coins]);

  //filtering the coins to display from obtained data
  let filteredCoins = coins.filter((ele) =>
    ["BTC", "ETH", "XRP", "USDT", "BNB"].includes(ele.symbol)
  );
  console.log("fc", filteredCoins);

  if (isLoading) {
    return <h6>Loading...</h6>;
  }

  if (isError) {
    return <h6>Error...</h6>;
  }

  

  //function to handle the timePeriod and selected tabs
  let handleTabKey = (key) => setSelectedTab(key);
  let handleTimePeriod = (e) => setTimePeriod(e.target.value);
  let selectedCoin =
    filteredCoins.find((coin) => coin.uuid === selectedTab);
  //   let ar = ["BTC", "ETH", "XRP", "USDT", "BNB"];
  //   console.log(ar.find(coin => coin === "Eth"));
  console.log("sc", selectedCoin);

  return (
    <div className="card mx-2 my-2">
      {/* card-header part starts */}
      {/* loading start */}
      <div className="p-2 border-bottom mb-2">
        {isLoading ? (
          //loading part
          <>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </>
        ) : (
          //actual selected coin
          <div className="d-flex justify-content-between">
            {selectedCoin ? (
              <div>
                <img
                  src={selectedCoin.iconUrl}
                  alt=""
                  className="mx-1"
                  width={"30px"}
                  height={"50px"}
                  style={{ borderRadius: "50%" }}
                />
                <span className="text-danger">{selectedCoin.symbol}</span>
              </div>
            ) : (
              <h6>Select the coin</h6>
            )}
            {/* timeperiods */}
            <select
              name=""
              id=""
              className="form-select w-25"
              value={timePeriod}
              onChange={handleTimePeriod}
            >
              {timePeriods.map((ele) => (
                <option className=" " key={ele} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      {/* card-header part ends */}
      <ul className="nav nav-tabs">
        {filteredCoins.map((scoin) => (
          <li className="nav-item">
            <button className="btn btn-success mx-1 mb-1" onClick={() => handleTabKey(scoin.uuid)}>{scoin.symbol}</button>
          </li>
        ))}
      </ul>

      {/* card-body part starts */}
<div>
  <LineBarGraph history={history} />
</div>
      {/* card-body part ends */}
    </div>
  );
};

export default FilterCard;
