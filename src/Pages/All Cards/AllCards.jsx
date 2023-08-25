import React from "react";
import "./AllCards.css";
import VideoImg from "../../Assets/VIDEO.png";
import PrimaryButton from "../../Components/Button/Button";
import FirstCards from "./FirstCards";
import SecondCard from "./SecondCard";
function AllCards() {
  return (
    <div className="container-fluid gx-0 video-img-background" id="services">
      <div className="container text-center position-relative">
        <img className="img-fluid video-img" src={VideoImg} alt="" />
        <div className="row position-absolute top-50 start-50 translate-middle">
          <div className="col video-text">
            <h1 className="fw-bold mt-5 mb-5">REACH MORE CUSTOMERS</h1>
            <PrimaryButton
              style={{
                text: "LEARN MORE",
                padding: "1.5rem 2.5rem",
                backgroundColor: "white",
                color: "#4ba87d",
              }}
            />
          </div>
        </div>
      </div>
      {/* FIRST CARDS  */}
      <div className="container mt-5">
        <div className="row">
          <FirstCards
            detail={{
              image: "Cards Images/photo.png",
              paragraph:
                "Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.",
            }}
          />
          <FirstCards
            detail={{
              image: "Cards Images/photo1.png",
              paragraph:
                "Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.",
              marginTop: "2rem",
            }}
          />

          <div className="col-10 col-sm-4 col-md-4 col-lg-4 cards-section">
            <h1 className="mt-5">
              The source for proven, engaging email campaigns
            </h1>
            <span>
              Whether you’re a startup, small business, e-commerce store, or
              want to promote your app, NinjaMail has the feature set tailored
              for your business.
            </span>
          </div>
        </div>
      </div>
      {/* <!-- !2nd cards section  --> */}
      <div className="container next-card-sec" id="Partners">
        <div className="row text-center">
          <SecondCard
            detail={{
              text: "Frankie",
              paragraph: "Member since 2016",
              class: "card-bg",
            }}
          />
          <SecondCard
            detail={{
              text: "Camile",
              paragraph: "Member since 2012",
              class: "card-bg1",
            }}
          />
          <SecondCard
            detail={{
              text: "Frankie",
              paragraph: "Member since 2018",
              class: "card-bg2",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AllCards;
