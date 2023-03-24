import React, { useEffect, useState } from "react";
import "./Home.css";
import bitcoin from "../../assets/bitcoin.png";
import ethe from "../../assets/ethe.png";
import { BiErrorCircle } from "react-icons/bi";
import bit from "../../assets/bit.webp";
import ethereum from "../../assets/ethereum.webp";
import Tether from "../../assets/Tether.webp";
import bnb from "../../assets/bnb.webp";
import Market from "../market/Market";
import ChooseUs from "../chooseUs/ChooseUs";
import Contact from "../contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  const [data, setData] = useState({});

  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin&vs_currencies=usd%2Ceur&include_24hr_change=true&include_market_cap=true&include_last_updated_at=true&include_project_links=true&include_low_volume=true&include_high_volume=true&include_ohlc=true&include_trade_volume=true&include_market_cap_rank=true&include_all_features=true&localization=false";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const jsonData = await response.json();
        const updatedData = {};
        Object.keys(jsonData).forEach((key) => {
          updatedData[key] = { name: key, ...jsonData[key] };
        });
        setData(updatedData);
      } catch (error) {
        console.error(BiErrorCircle);
      }
    };

    fetchData();
  }, [url]);

  console.log(data);
  return (
    <section>
      <main className="home__container">
        <h1>
          TRACK AND TRADE <span>CRYPTO CURRENCIES</span>
        </h1>

        <div>
          <img src={bitcoin} width={50} alt="money" className="bit" />
          <img src={ethe} alt="money" width={50} className="ether" />
        </div>
      </main>
      {Object.keys(data).length === 0 ? (
        <span class="loader"></span>
      ) : (
        <div className="home__moneys">
          <div>
            <img src={bit} alt="money" width={90} />
            <div className="home__text">
              <h4>{data.bitcoin && data.bitcoin.name}</h4>
              <span
                className={data.bitcoin.eur_24h_change <= 0 ? "red" : "green"}
              >
                {data.bitcoin && data.bitcoin.eur_24h_change.toFixed(2)}
              </span>
            </div>
            <span className="home__usd">
              ${data.bitcoin && data.bitcoin.usd}
            </span>
          </div>

          <div>
            <img src={ethereum} alt="money" width={90} />
            <div className="home__text">
              <h4>{data.ethereum && data.ethereum.name}</h4>
              <span
                className={data.ethereum.eur_24h_change <= 0 ? "red" : "green"}
              >
                {data.ethereum && data.ethereum.eur_24h_change.toFixed(2)}
              </span>
            </div>
            <span className="home__usd">
              ${data.ethereum && data.ethereum.usd}
            </span>
          </div>

          <div>
            <img src={Tether} alt="money" width={90} />
            <div className="home__text">
              <h4>{data.tether && data.tether.name}</h4>
              <span
                className={data.tether.eur_24h_change <= 0 ? "red" : "green"}
              >
                {data.tether && data.tether.eur_24h_change.toFixed(2)}
              </span>
            </div>
            <span className="home__usd">
              ${data.ethereum && data.ethereum.usd}
            </span>
          </div>

          <div>
            <img src={bnb} alt="money" width={90} />
            <div className="home__text">
              <h4>{data.binancecoin && data.binancecoin.name}</h4>
              <span
                className={
                  data.binancecoin.eur_24h_change <= 0 ? "red" : "green"
                }
              >
                {data.binancecoin && data.binancecoin.eur_24h_change.toFixed(2)}
              </span>
            </div>
            <span className="home__usd">
              {" "}
              ${data.binancecoin && data.binancecoin.usd}
            </span>
          </div>
        </div>
      )}{" "}
      <Market />
      <ChooseUs />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
