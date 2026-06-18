import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Layout, Input, Avatar } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  SearchOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { message } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { clearUser } from "../store/authenticationReducers/authSlice";

const { Header } = Layout;

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase logout
      dispatch(clearUser()); // Clear Redux state
      message.success("Logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const displayName = user?.displayName || "User";
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
          backgroundColor: "#1f2937",
          color: "white",
        }}>
        {/* User Profile */}
        <div className="text-center mb-4">
          <Avatar size={64} icon={<UserOutlined />} />
          <h5 className=" mt-2">{displayName}</h5>
        </div>

        {/* Sidebar Links */}
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to={"/dashboard"} className="nav-link text-white">
              <HomeOutlined style={{ marginRight: 8 }} />
              Home
            </Link>
          </li>
          <li>
            <Link to="profile" className="nav-link text-white">
              <UserOutlined style={{ marginRight: 8 }} />
              Profile
            </Link>
          </li>
          <li>
            <Link to="reset-password" className="nav-link text-white">
              <LockOutlined style={{ marginRight: 8 }} />
              Reset Password
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="nav-link text-white"
              onClick={handleLogout}>
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
          }}>
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

        {/* dynamic Content */}
        <div className="container my-4">
          <Outlet/>
        </div>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
