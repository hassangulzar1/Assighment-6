import React from "react";

function BrandInput() {
  return (
    <div class="row mt-5">
      <div class="col-6 offset-3 col-sm-6 offset-sm-2">
        <input
          type="email"
          class="form-control p-3"
          style={{ fontFamily: "Raleway", fontSize: "1.5rem" }}
          placeholder="Enter your email address"
        />
        <p class="mt-3 fs-4 text-success">Thanks! Email received.</p>
      </div>
      <div class="col-sm-2 text-center">
        <button class="btn1">JOIN OUR LIST</button>
      </div>
    </div>
  );
}

export default BrandInput;
