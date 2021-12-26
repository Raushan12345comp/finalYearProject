import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/adypulearn.png";
import { theme } from "../assets/utils/theme";
import "../style/Navbar.css";
const Navbar = () => {
  const navItems = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "about",
      link: "/about",
    },
    {
      name: "team",
      link: "/team",
    },
    {
      name: "contact",
      link: "/contact",
    },
  ];

  return (
    <div>
      <nav className="uk-navbar-container uk-margin" uk-navbar>
        <div className="uk-navbar-left">
          <Link className="uk-navbar-item uk-logo" to='/'>
            <img src={img} className="img" alt="img" />
          </Link>
          <div className="uk-navbar-item">
            <div className="navCont">
              {navItems.map((item, index) => {
                return (
                  <Link
                    style={{
                      fontSize: theme.fontSizes.h4,
                    }}
                    className="navItems"
                    key={index}
                    to={item?.link}
                  >
                    {item?.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
