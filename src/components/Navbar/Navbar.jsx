import React, { useState } from "react";
import twitter from "../../assets/twitter.svg";
import discord from "../../assets/discord.svg";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
                <Link>Home</Link>
              </li>
              <li>
                <Link>Market</Link>
              </li>
              <li>
                <Link>Choose Us</Link>
              </li>
              <li>
                {" "}
                <Link>Join</Link>
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
