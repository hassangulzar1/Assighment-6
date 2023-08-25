import React from "react";
import "./Footer.css";
import divider from "../../Assets/divider.png";
import footerLogo from "../../Assets/NinjaMail Logo footer.png";
function Footer() {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-3 col-sm-4 col-md-4 mt-5">
          <img
            class="img-fluid"
            src={footerLogo}
            alt=""
            style={{ width: "80%" }}
          />
        </div>
        <div class="col-2 col-sm-2 mt-5 footer">
          <a href="">Feature</a> <br />
          <a href="">Pricing</a>
          <br />
          <a href="">Services</a>
          <br />
          <a href="">Partners</a>
          <br />
        </div>
        <div class="col-2 offset-1 mt-5 footer">
          <a href="">About Us</a> <br />
          <a href="">Tutorials</a>
          <br />
          <a href="">Resourses</a>
          <br />
          <a href="">Help Center</a>
          <br />
          <a href="">Templates</a>
          <br />
          <a href="">Case Studies</a>
          <br />
        </div>
        <div class="col-2 offset-1 mt-5 footer">
          <a href="">Contact us</a>
          <br />
          <a href="">Stack</a>
          <br />
          <a href="">Jobs</a>
        </div>
      </div>
      <div class="row my-5">
        <div class="col">
          <img class="img-fluid" src={divider} alt="" />
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-10 col-sm-6 ms-5 footer-end">
          <span>
            NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
            rights reserved.
          </span>
        </div>
        <div class="col-10 col-sm-2 ms-5 my-4 my-sm-0 footer-end">
          <span>Terms & Conditions</span>
        </div>
        <div class="col-10 col-sm-2 ms-5 footer-end">
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
