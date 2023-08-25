import React from "react";

function BrandHeading() {
  let style = {
    fontFamily: "Playfair Display",
    fontSize: "4.4rem",
    fontWeight: "900",
    lineHeight: "4.8rem",
  };
  return (
    <div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-8 offset-sm-2 text-center">
            <h1 style={style}>
              Learn how others are reaching their audience easier than ever
              before.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandHeading;
