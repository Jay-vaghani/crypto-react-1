import React from "react";
import "./banner.css";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-content pt-5 pb-4">
          <div className="tag-line">
            <h2 className="display-2 fw-bold">Crypto Tracker</h2>
            <p className="">
              Get All Information Regarding Your Crypto Currency
            </p>
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Banner;
