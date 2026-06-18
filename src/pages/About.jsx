import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <h1>About CryptoCurrency</h1>

      <p>
        CryptoCurrency is a modern cryptocurrency analytics platform designed to
        help users track market trends, monitor digital assets, and make
        informed investment decisions.
      </p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm w-100 h-100">
            <h5>Real-Time Data</h5>
            <p>
              Stay updated with live cryptocurrency prices, market
              capitalization, and trading volume.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm w-100 h-100">
            <h5>Market Insights</h5>
            <p>
              Analyze historical trends and compare top-performing
              cryptocurrencies through interactive charts.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm w-100 h-100">
            <h5>Secure Access</h5>
            <p>
              Access personalized dashboards securely using authentication and
              account management features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
