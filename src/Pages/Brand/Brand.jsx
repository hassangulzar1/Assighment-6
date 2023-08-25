import React from "react";
import BrandHeading from "./BrandHeading";
import BrandInput from "./BrandInput";
import BrandH1 from "./BrandH1";
import Logos from "../../Assets/Logos.png";
function Brand() {
  return (
    <>
      <BrandHeading />
      <div class="container text-center">
        {/* <!--!Our brands section  --> */}
        <div class="container mt-5">
          <div class="row">
            <BrandInput />
            <BrandH1 />
          </div>
          <div class="row mt-5">
            <div class="col mt-4">
              <img class="img-fluid" src={Logos} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
