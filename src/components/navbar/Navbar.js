import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets/index";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/host">Host</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/vans">Vans</NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <HiOutlineUserCircle className="user-logo" />
          </NavLink>
        </li>
      </ul>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="vanlife__navbar">
      <div className="vanlife__navbar-container">
        <div className="vanlife__navbar-container_logo">
          <NavLink to="/">
            <img src={logo} alt="vanlife logo" className="main-logo" />
          </NavLink>
        </div>
        <nav className="vanlife__navbar_mainnav">
          <Menu />
        </nav>
        <div className="vanlife__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              size={30}
              style={{ color: "#4d4d4d" }}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              size={30}
              style={{ color: "#4d4d4d" }}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className="vanlife__navbar-menu-container scale-up-center">
              <Menu />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
