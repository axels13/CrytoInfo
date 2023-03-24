import React from "react";
import bitcoin from "../../assets/bitcoin.png";
import ether from "../../assets/ethe.png";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <aside>
        <div className="contact__title">
          <h1 className="title">
            JOIN US VIA <span>DISCORD</span>
          </h1>
          <span className="contact__span">
            Invest and manage all your crypto at one place.
          </span>
        </div>
        <img src={bitcoin} alt="coin" width={90} className="bitcoin" />
        <img src={ether} alt="coin" width={90} className="ethereum" />

        <div className="contact__btn">
          <button>Join Via Discord</button>
        </div>
      </aside>
    </section>
  );
};

export default Contact;
