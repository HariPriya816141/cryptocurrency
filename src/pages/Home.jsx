import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <section className="container py-5 text-center">
      <h1 className="display-3 fw-bold">
        Explore the Future of Digital Finance
      </h1>

      <p className="lead my-4">
        Track cryptocurrency markets, monitor trends, analyze performance, and
        stay ahead in the world of digital assets.
      </p>

      <Link to="/login" className="btn btn-primary btn-lg">
        Explore Dashboard
      </Link>
    </section>
  );
};

export default Home;
