import React from "react";
import { Table } from "antd";
import millify from "millify";
import UseCryptoCoins from "../../hooks/UseCryptoCoins";
import UseCryptoHistory from "../../hooks/UseCryptoHistory";
import LineCharts from "../../graphs/LineCharts";

const CryptoTable = () => {
    let {coins, isLoading, isError} = UseCryptoCoins();

  let columns = [
    {
      key: "rank",
      title: "Rank",
      dataIndex: "rank",
      responsive: ["xs", "sm", "md", "lg", "xl", "xxl"],
      align: "center",
    },
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      responsive: ["xs", "sm", "md", "lg", "xl", "xxl"],
      align: "center",
      render: (text, record) => (
        <div className="d-flex justify-content-center align-content-center">
            <img src={record.iconUrl} alt={record.name} width={"30px"} height={"30px"} className="mx-1" />
            <span>{record.symbol}</span>
        </div>
      ) ,
    },
       {
      key: "price",
      title: "Price",
      dataIndex: "price",
      responsive: ["xs", "sm", "md", "lg", "xl", "xxl"],
      align: "center",
      render: (text, record) => `${millify(record.price)}`,
    },
    {
      key: "24hVolume",
      title: "Total24hVol",
      dataIndex: "24hVolume",
      responsive: ["xs", "sm", "md", "lg", "xl", "xxl"],
      align: "center",
      render: (text, record) => `${millify(text)}`,
    },
    {
      key: "marketCap",
      title: "MarketCap",
      dataIndex: "marketCap",
      responsive: ["xs", "sm", "md", "lg", "xl", "xxl"],
      align: "center",
      render: (text, record) => `${millify(text)}`,
    },
    {
      key: "change",
      title: "Change",
      dataIndex: "change",
      responsive: ["xs", "sm", "md", "lg", "xl", "xxl"],
      align: "center",
      render: (text, record) => (
        <>
        <span style={{color:`${parseFloat(text) < 0 ? "red" : "green"}`}}>{text}</span>
        </>
      ),
    },
     {
      key: "uuid",
      title: "Graph",
      dataIndex: "uuid",
      responsive: ["xs", "sm", "md", "lg", "xl", "xxl"],
      align: "center",
      render: (coinId) => (<History data={coinId} />),
    },
  ];

//historical data of each coin
let History = ({data}) => {
  let {history, isLoading, isError} = UseCryptoHistory(data)
  if(isLoading){
    return <h6>Loading...</h6>
  }
  if(isError){
    return <h6>Error...</h6>
  }
   return <LineCharts data={history} />
}

  return (
    <div className="container-fluid">
      <Table dataSource={coins} bordered rowHoverable columns={columns} key={coins.uuid} loading={isLoading} />;
    </div>
  );
};

export default CryptoTable;
