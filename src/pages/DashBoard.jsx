import React from "react";
import { Layout, Input, Avatar } from "antd";
import { HomeOutlined, UserOutlined, LogoutOutlined, SearchOutlined, LockOutlined } from "@ant-design/icons";

import BestCrypto from "../components/crypto/bestcoins/BestCrypto";
import GlobalStats from "../components/crypto/stats/GlobalStats";
import FilterCard from "../components/crypto/cards/FilterCard";
import CryptoTable from "../components/crypto/CryptoTable";
import { Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";


const { Header } = Layout;

const Dashboard = () => {

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);   // Firebase logout
      dispatch(clearUser()); // Clear Redux state
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  
const navigate = useNavigate();

  
  const displayName = "Raju";  

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        className="d-flex flex-column flex-shrink-0 p-3"
        style={{
          width: "200px",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          backgroundColor: 'lightgray'
        }}
      >
        {/* User Profile */}
        <div className="text-center mb-4">
          <Avatar size={64} icon={<UserOutlined />} />
          <h5 className=" mt-2">{displayName}</h5>
        </div>

        {/* Sidebar Links */}
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to={'/dashboard'} className="nav-link text-black">
              <HomeOutlined style={{ marginRight: 8 }} />
              Home
            </Link>
          </li>
          <li>
            <Link to={''} className="nav-link text-black">
              <UserOutlined style={{ marginRight: 8 }} />
              Profile
            </Link>
          </li>
          <li>
            <Link to={''} className="nav-link text-black">
              <LockOutlined style={{ marginRight: 8 }} />
              Reset Password
            </Link>
          </li>
          <li>
            <Link to={''} className="nav-link text-black">
              <LogoutOutlined style={{ marginRight: 8 }} />
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* main Layout*/}
      <Layout style={{ marginLeft: 200 }}>
        {/* Navbar */}
        <Header
          style={{
            background: "#fff",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 8px #f0f1f2",
          }}
        >
          {/* Search Bar */}
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search..."
            style={{ width: 300 }}
          />

          {/* Welcome div */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Avatar icon={<UserOutlined />} />
            <span>Welcome, {displayName}</span>
          </div>
        </Header>

        {/* main Content */}
        <div className="container my-4">
          <div>
            <h4 className="mx-4 my-3">Global Stats</h4>
            <GlobalStats />
          </div>

          <div>
            <h4 className="mx-4 my-3">Best Coins</h4>
            <BestCrypto />
          </div>

          <div>
            <h4 className="mx-4 my-3">Crypto Table</h4>
            <CryptoTable />
          </div>

          <div>
            <h4 className="mx-4 my-3">Filters</h4>
            <FilterCard />
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
