import React, { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar">
      <Link to="/" onClick={() => setActive("home")}>
        <img src="./logo.svg" alt="logo" />
      </Link>

      <div className="menu" onClick={() => setMenu(!menu)}>
        <BiMenuAltLeft />
      </div>

      <ul className={menu ? "open" : "close"}>
        <li>
          <Link
            to="/"
            className={active === "home" ? "active-nav" : ""}
            onClick={() => {
              setActive("home");
              setMenu(!menu);
            }}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/upload-csv"
            className={active === "upload" ? "active-nav" : ""}
            onClick={() => {
              setActive("upload");
              setMenu(!menu);
            }}
          >
            Upload CSV
          </Link>
        </li>

        <li>
          <Link
            to="/find-medicine"
            className={active === "find" ? "active-nav" : ""}
            onClick={() => {
              setActive("find");
              setMenu(!menu);
            }}
          >
            Find Medicine
          </Link>
        </li>

        <li>
          <Link
            to="/place-order"
            className={active === "place-order" ? "active-nav" : ""}
            onClick={() => {
              setActive("place-order");
              setMenu(!menu);
            }}
          >
            Place Order
          </Link>
        </li>

        <li>
          <Link
            to="/orders"
            className={active === "orders" ? "active-nav" : ""}
            onClick={() => {
              setActive("orders");
              setMenu(!menu);
            }}
          >
            Orders
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
