import React from 'react'
import UseCryptoHistory from './hooks/UseCryptoHistory';
// import FilterCard from './components/crypto/cards/FilterCard';
// import BestCrypto from './components/crypto/bestcoins/BestCrypto';
// import GlobalStats from './components/crypto/stats/GlobalStats';
// import CryptoTable from './components/crypto/CryptoTable';
import AppRoutes from './routes/AppRoutes';


const App = () => {
  let {history} = UseCryptoHistory();
  console.log(history);
  
 
return (
    <div>
      <AppRoutes/>
    </div>
  )
}

export default App


