import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import Cow from "./cow.png";
import "./Navbar.css";

const NavbarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsSubMenuOpen(false); // Close submenu when main menu toggles
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  const toggleSubMenu = (e) => {
    e.stopPropagation(); // Prevent menu close when submenu is toggled
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const isActive = (path) => location.pathname === path; // Check if the path is active

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-row">
          <div className="navbar-logo">
            <NavLink exact to="/" onClick={closeMenu}>
              <img className="navbar-cow-logo" src={Cow} alt="logo" />
            </NavLink>
          </div>
          <div className="navbar-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FiXCircle /> : <FiAlignRight />}
          </div>
          <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
            <li className="navbar-item">
              <NavLink
                exact
                to="/Homepage"
                className={isActive("/Homepage") ? "active-link" : ""}
                onClick={closeMenu}
              >
                หน้าหลัก
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/Food"
                className={isActive("/Food") ? "active-link" : ""}
                onClick={closeMenu}
              >
                อาหาร
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/Tabledata"
                className={isActive("/Tabledata") ? "active-link" : ""}
                onClick={closeMenu}
              >
                ทำนาย
              </NavLink>
            </li>
            <li className="navbar-item">
              <div className="navbar-dropdown" onClick={toggleSubMenu}>
                <span style={{ color: "white" }}>
                  ข้อมูล <FiChevronDown />
                </span>
              </div>
              <ul
                className={`navbar-submenu ${
                  isSubMenuOpen ? "submenu-open" : ""
                }`}
              >
                <li className="navbar-itemsub">
                  <NavLink
                    to="/Milk"
                    className={isActive("/Milk") ? "active-link" : ""}
                    onClick={closeMenu}
                  >
                    นมวัว
                  </NavLink>
                </li>
                <li className="navbar-itemsub">
                  <NavLink
                    to="/Homefarmer"
                    className={isActive("/Homefarmer") ? "active-link" : ""}
                    onClick={closeMenu}
                  >
                    สรุป
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/Auth"
                className={isActive("/Auth") ? "active-link" : ""}
                onClick={closeMenu}
              >
                ผู้ใช้
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavbarMenu;
