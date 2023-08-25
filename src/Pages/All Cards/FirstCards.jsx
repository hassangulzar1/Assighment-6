import React from "react";
function FirstCards(props) {
  return (
    <div class="col col-sm-4 col-md-4 col-lg-4">
      <div
        class="card cards-section"
        style={{ width: "28rem", marginTop: props.detail.marginTop }}
      >
        <img
          src={props.detail.image}
          class="card-img-top img-fluid"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text fs-3">{props.detail.paragraph}</p>
          <a href="#" class="fw-bold text-decoration-none fs-4 text-success">
            Learn More &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default FirstCards;
