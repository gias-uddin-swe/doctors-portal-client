import React from "react";
import InfoCard from "./../InfoCard/InfoCard";
import {
  faMapMarker,
  faPhoneVolume,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./BusinessInfo.css";

const BusinessInfo = () => {
  const infoData = [
    {
      title: " Opening Hours",
      description: "we are opening 7days",
      icon: faClock,
      background: "primary",
    },
    {
      title: " Visit Our Location",
      description: "Brooklyn Ny 10003 USA",
      icon: faMapMarker,
      background: "dark",
    },
    {
      title: " Call us Now",
      description: "+15697854124",
      icon: faPhoneVolume,
      background: "primary",
    },
  ];

  return (
    <section className="d-flex justify-content-center">
      <div className="row  business-info w-75">
        {infoData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
