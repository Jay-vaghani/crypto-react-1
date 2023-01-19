import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar bg-black bg-gradient shadow">
      <div className="container-fluid px-5">
        <Link className="navbar-brand text-warning" href="/">
          Navbar
        </Link>
        <div className="ms-auto">
          <select
            className="form-select border-0 shadow-none bg-black text-warning"
            aria-label="Default select example"
          >
            <option className="" value="inr" selected>
              INR
            </option>
            <option className="" value="usd">
              USD
            </option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Header;
