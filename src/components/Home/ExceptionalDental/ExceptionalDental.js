import React from "react";
import dental from "../../../images/dental.png";
import "./ExceptionalDental.css";

const ExceptionalDental = () => {
  return (
    <div className="row d-flex m-auto align-items-center w-50 exceptionalDental-container">
      <div className="col-md-6">
        <img
          
          src={dental}
          alt=""
          className="img-fluid dental-image"
        />
      </div>
      <div className="col-md-6">
        <h2 className="text-center">
          Exceptional Dental <br />
          Care,On Your Terms{" "}
        </h2>
        <small className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum
          fugiat enim? Et aliquid reiciendis rerum similique amet impedit beatae
          facilis, commodi delectus quia libero enim qui repellendus in
          temporibus vero minus nesciunt veniam. Consequatur!
        </small>
      </div>
    </div>
  );
};

export default ExceptionalDental;
