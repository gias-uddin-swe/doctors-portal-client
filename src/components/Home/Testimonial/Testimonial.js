import React from "react";
import quatation from "../../../images/quatation.png";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Testimonial.css";
import winson1 from "../../../images/Ellipse 1.png";
import winson2 from "../../../images/Ellipse 2.png";
import winson3 from "../../../images/Ellipse 3.png";

const Testimonial = () => {
  const reviews = [
    {
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut architecto culpa iure mollitia ad rerum odit aperiam magnam neque ipsum libero. Quisquam, ullam? Blanditiis! ",
      name: "Winson herry",
      address: "california",
      image: winson1,
    },
    {
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut architecto culpa iure mollitia ad rerum odit aperiam magnam neque ipsum libero. Quisquam, ullam? Blanditiis! ",
      name: "Winson herry",
      address: "california",
      image: winson2,
    },
    {
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aut architecto culpa iure mollitia ad rerum odit aperiam magnam neque ipsum libero. Quisquam, ullam? Blanditiis! ",
      name: "Winson herry",
      address: "california",
      image: winson3,
    },
  ];
  return (
    <div className="div">
      <div className="testimonial-container d-flex align-items-center justify-content-center">
        <div className="row ">
          <div className="col-md-6 ">
            <h6>TESTIMONIAL</h6>
            <h2>
              What's Our Patients <br /> Says
            </h2>
          </div>
          <div className="col-md-6">
            <img src={quatation} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-evenly   align-items-center  ">
        {reviews.map((review) => (
          <ReviewCard review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
