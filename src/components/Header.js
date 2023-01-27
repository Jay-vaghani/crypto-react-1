import React from "react";
import { Link } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

function Header() {
  const {  setCurrency } = CryptoState();


  return (
    <nav className="navbar bg-black bg-gradient shadow">
      <div className="container-fluid px-5">
        <Link className="navbar-brand text-warning" to="/">
          Navbar
        </Link>
        <div className="ms-auto">
          <select
            className="form-select border-0 shadow-none bg-black text-warning"
            aria-label="Default select example"
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option className="" value="INR" defaultValue>
              INR
            </option>
            <option className="" value="USD">
              USD
            </option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Header;
