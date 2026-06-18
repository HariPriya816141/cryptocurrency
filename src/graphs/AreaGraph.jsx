import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";
const cardinal = curveCardinal.tension(0.2);
import UseCryptoHistory from "../hooks/UseCryptoHistory";

const AreaGraph = ({ coins }) => {
  console.log("coins", coins);
  const { uuid: coinId, name, symbol, iconUrl } = coins;
  const { history, isLoading, isError } = UseCryptoHistory(coinId);
  console.log("history", history);
  if (isLoading) {
    return <h6>Loading...</h6>;
  }
  if (isError) {
    return <h6>Error...</h6>;
  }
  let graphdata = history.map((point) => ({
    
      date: new Date(point.timestamp * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      price: parseFloat(point?.price),
    
  }));
  console.log("gd", graphdata.price);

  return (
    <div className="col-sm-12 col-md-4 col-lg-4 col-12">
      <div className="card shadow border border-success p-3">
        <h5 className="d-flex justify-content-between border-bottom">
          <img
            src={iconUrl}
            alt="image"
            className="rounded-circle"
            width={"30px"}
            height={"30px"}
          />
          <span className="mx-2">{name}</span>
          <span className="card-text">{symbol}</span>
        </h5>
        {/* graph section starts */}
        <div width="100%" height="400px">
           <ResponsiveContainer width="100%" height={400}>
          <AreaChart
           
            data={graphdata}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.3}
            />
            <Area
              type={cardinal}
              dataKey="price"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
        </div>
        {/* graph section ends */}
      </div>
    </div>
  );
};

export default AreaGraph;
