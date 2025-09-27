import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Spin } from "antd";

const PublicRoutes = ({ children }) => {
  console.log(children);
  const { user, loading } = useSelector((state) => state.auth);
  if (loading) {
    return (
      <Spin size="large" style={{ display: "block", margin: "20% auto" }} />
    );
  }
  //if user exists navigate to dashboard else navigate to login page
  return user ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoutes;
