import React from "react";
import PrimaryButton from "../../Components/Button/Button";
import SecondaryButton from "../../Components/Button/SecondaryButton";
import HeroImg from "../../Assets/hero photo.png";
import "./Hero.css";
function Hero() {
  return (
    <div className="container-fluid gx-0 background-img">
      <div className="container Hero-section">
        <div className="row align-items-center text-center gx-0 py-5">
          <div className="col-lg-6 hero-text">
            <h1 className="fw-bold lh-1 mb-3">
              Create Stunning <br />
              Email Campaigns
            </h1>
            <p className="lead display-6">
              Create and launch email campaigns that captivate your customers in
              just a few clicks.
            </p>
            <div className="d-grid gap-5 mt-5 d-flex justify-content-center">
              <PrimaryButton
                style={{ text: "TRY NOW", padding: "1.5rem 2.5rem" }}
              />
              <SecondaryButton style={{ text: "GET A DEMO" }} />
            </div>
          </div>
          <div className="col-12 text-center col-sm-12 mt-5 mt-sm-0 col-lg-6">
            <img
              src={HeroImg}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
