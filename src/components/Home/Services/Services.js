import React from "react";
import fluoride from "../../../images/001-dental.png";
import cavity from "../../../images/tooth (1).png";
import whitening from "../../../images/tooth.png";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const Services = () => {
  const serviceData = [
    {
      title: "Fluoride Treatment",
      image: fluoride,
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laborum praesentium facere voluptates assumenda optio, hic, sed nostrum atque eum voluptatibus nihil nobis velit excepturi! ",
    },
    {
      title: "Cavity Feeling",
      image: cavity,
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laborum praesentium facere voluptates assumenda optio, hic, sed nostrum atque eum voluptatibus nihil nobis velit excepturi! ",
    },
    {
      title: "Teeth Whitening",
      image: whitening,
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laborum praesentium facere voluptates assumenda optio, hic, sed nostrum atque eum voluptatibus nihil nobis velit excepturi! ",
    },
  ];
  return (
    <section>
      <div className="text-center mt-5 pt-5">
        <h5 style={{ color: "#1CC7C1" }}>Our Services</h5>
        <h2 style={{ color: "#3a4256" }}>Services We provide</h2>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="row  business-info w-75 mt-5">
          {serviceData.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
