import React, { useEffect, useState } from "react";
import "./market.css";
import bitcoin from "../../assets/bitcoin.png";
const Market = () => {
  const [coins, setCoins] = useState([]);
  const [pageNumber, setPageNumber] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageNumber}&sparkline=false
  `;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCoins(data));
  }, [pageNumber]);
  console.log(coins);

  const buttons = [];

  for (let i = 1; i <= 5; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => setPageNumber(i)}
        className={i === pageNumber ? "active" : ""}
      >
        {i}
      </button>
    );
  }

  // funcion para numeros grandes con comas
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <section className="market">
      <h2>Market Update</h2>

      <div className="market__container">
        <div className="market__secciones">
          <span>Coin</span>
          <span>Price</span>
          <span>24h Change</span>
          <span>Market Cap</span>
        </div>

        {coins.map((coin) => (
          <div className="market__info">
            <img src={coin.image} alt="" width={50} />
            <p>
              {coin.name}
              <span>${coin.current_price.toFixed(2)}</span>
              <span
                className={
                  coin.price_change_percentage_24h <= 0 ? "red" : "green"
                }
              >
                {coin.price_change_percentage_24h?.toFixed(2) + " %"}
              </span>
              <span>{"$ " + numberWithCommas(coin.market_cap)}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="buttons">{buttons}</div>
    </section>
  );
};

export default Market;
