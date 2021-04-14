import React from "react";
import chair from "../../../images/Mask Group 1.png";
import "../Header/Header.css";

const HeaderMain = () => {
  return (
    <main
      className="row  d-flex align-items-center header-main"
      style={{ height: "600px" }}
    >
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>
          Your New Smile <br />
          Starts Here
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea
          fugit assumenda in laboriosam nobis architecto autem nulla temporibus
          natus voluptates id numquam, dolorum dolor.
        </p>
        <button className="btn btn-info">GET APPOINTMENT</button>
      </div>
      <div className="col-md-6">
        <img
          style={{ width: "100%" }}
          src={chair}
          alt=""
          className="img fluid"
        />
      </div>
    </main>
  );
};

export default HeaderMain;
