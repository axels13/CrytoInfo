import React from "react";
import "./Choose.css";
import hand from "../../assets/hand.png";
const ChooseUs = ({ chooseRef }) => {
  return (
    <section id="choose" ref={chooseRef}>
      <div className="container__aside">
        <h2 className="">
          WHY <span>CHOOSE US</span>
        </h2>
        <div className="grid__container">
          <div className="grid__card__container">
            {/*  */}
            <div className="grid__card">
              <div>
                <i class="fa-solid fa-wallet"></i>
              </div>
              <div>
                <h3>CONNECT YOUR WALLET</h3>
                <p>Use Trust Wallet, Metamask or to connect to the app.</p>
              </div>
            </div>

            <div className="grid__card">
              <div>
                <i class="fa-solid fa-pen-ruler"></i>
              </div>
              <div>
                <h3>SELECT YOUR QUANTITY</h3>
                <p>
                  Upload your crypto and set a title, description and price.
                </p>
              </div>
            </div>

            <div className="grid__card">
              <div>
                <i class="fa-solid fa-bolt"></i>
              </div>
              <div>
                <h3>CONFIRM TRANSACTION</h3>
                <p>Earn by selling your crypto on our marketplace.</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="grid__card__img">
            <img src={hand} alt="hand" />
          </div>
          {/*  */}
          <div className="grid__card_column">
            <div className="grid__card">
              <div>
                <i class="fa-solid fa-satellite-dish"></i>
              </div>
              <div>
                <h3>RECEIVE YOUR OWN NFTS</h3>
                <p>Invest all your crypto at one place on one platform</p>
              </div>
            </div>

            <div className="grid__card">
              <div>
                <i class="fa-solid fa-chess-knight"></i>
              </div>
              <div>
                <h3>TAKE A MARKET TO SELL</h3>
                <p>
                  Discover, collect the right crypto collections to buy or sell.
                </p>
              </div>
            </div>
            <div className="grid__card">
              <div>
                <i class="fa-solid fa-boxes-stacked"></i>
              </div>
              <div>
                <h3>DRIVE YOUR COLLECTION</h3>
                <p>We make it easy to Discover, Invest and manage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
