import React from "react";
import "./SecondCard.css";
function SecondCard(props) {
  const classes = "card mx-auto " + props.detail.class;
  return (
    <div className="col-12 col-sm my-5">
      <div className={classes} style={{ width: "35rem" }}>
        <div className="card-txt">
          <h1 className="ms-3 text-light">{props.detail.text}</h1>
          <p className="text-light ms-3">{props.detail.paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default SecondCard;
