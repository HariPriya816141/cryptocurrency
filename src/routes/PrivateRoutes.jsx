import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Spin } from "antd";

const PrivateRoutes = ({ children }) => {
  console.log(children);
  const { user, loading } = useSelector((state) => state.auth);
  if (loading) {
    return (
      <Spin size="large" style={{ display: "block", margin: "20% auto" }} />
    );
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
