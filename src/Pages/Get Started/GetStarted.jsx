import React from "react";
import background from "../../Assets/GetStarted_Box.png";
import PrimaryButton from "../../Components/Button/Button";
function GetStarted() {
  return (
    <div className="container-fluid gx-0 text-center mt-5 position-relative">
      <img
        className="img-fluid"
        style={{ width: "100%", height: "40vh" }}
        src={background}
        alt=""
      />
      <div className="get-started position-absolute top-50 start-50 translate-middle">
        <h1
          style={{
            fontFamily: "Playfair Display",
            fontSize: "6rem",
            fontWeight: 900,
            color: "white",
          }}
        >
          Get started today!
        </h1>
        <span style={{ marginTop: "2rem" }}>
          <PrimaryButton
            style={{
              text: "PICK A PLAN",
              padding: "1.5rem 2.5rem",
              backgroundColor: "white",
              color: "#4ba87d",
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default GetStarted;
