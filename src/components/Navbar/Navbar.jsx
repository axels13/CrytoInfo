import React, { useState } from "react";
import twitter from "../../assets/twitter.svg";
import discord from "../../assets/discord.svg";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = ({ homeRef, marketRef, chooseRef, joinRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTohomeRef = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTomarketRef = () => {
    marketRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTochooseRef = () => {
    chooseRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTojoinRef = () => {
    joinRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header>
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__logo">
            <p>CRYPTOINFO</p>
          </div>
          <div className="nav__hamburguesa">
            <button onClick={toggleMenu}>
              <span>
                <BiMenu />
              </span>
            </button>
          </div>

          <div>
            <ul className={`nav__menu ${isOpen ? "nav__menu show" : ""}`}>
              <span className="close" onClick={toggleMenu}>
                <AiOutlineClose />
              </span>
              <li>
                <Link onClick={scrollTohomeRef}>Home</Link>
              </li>
              <li>
                <Link onClick={scrollTomarketRef}>Market</Link>
              </li>
              <li>
                <Link onClick={scrollTochooseRef}>Choose Us</Link>
              </li>
              <li>
                {" "}
                <Link onClick={scrollTojoinRef}>Join</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="nav__social">
              <li>
                <img src={twitter} alt="social" width={30} />
              </li>
              <li>
                <img src={discord} alt="social" width={30} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
