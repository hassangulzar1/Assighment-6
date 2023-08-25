import React from "react";
import logo from "../../Assets/NinjaMail Logo.png";
import PrimaryButton from "../../Components/Button/Button";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar1">
      <div className="container-fluid mx-5 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img className="img-fluid logo" src={logo} alt="" />
        </div>

        <div className="nav1">
          <ul className="d-flex">
            <li className="d-none d-sm-block mt-3">
              <a className="" href="#">
                FEATURE
              </a>
              <a className="mx-sm-2 mx-md-5" href="#">
                PRICING
              </a>
              <a className="" href="#services">
                SERVICES
              </a>
              <a className="mx-sm-2 mx-md-5" href="#Partners">
                PARTNERS
              </a>
            </li>
            <PrimaryButton
              style={{
                text: "SIGN UP FREE",
              }}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
