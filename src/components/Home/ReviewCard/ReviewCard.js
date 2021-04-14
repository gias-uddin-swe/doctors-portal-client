import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  return (
    <div className="col-md-4 reviews-container mt-2">
      <small>{review.description}</small>
      <div className="d-flex justify-content-center align-items-center">
        <div className="row   w-auto">
          <div className="col-md-6 mt-5">
            <img style={{ width: "50px" }} src={review.image} alt="" />
          </div>
          <div className="col-md-6 mt-5">
            <h6>{review.name}</h6>

            <p>{review.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
