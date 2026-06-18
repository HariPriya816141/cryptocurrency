import BestCrypto from "../components/crypto/bestcoins/BestCrypto";
import GlobalStats from "../components/crypto/stats/GlobalStats";
import FilterCard from "../components/crypto/cards/FilterCard";
import CryptoTable from "../components/crypto/CryptoTable";

const Dashboard = () => {
  return (
    <>
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
    </>
  );
};

export default Dashboard;