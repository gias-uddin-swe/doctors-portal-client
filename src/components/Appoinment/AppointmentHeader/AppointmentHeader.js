import React from "react";
import chair from "../../../images/Mask Group 1.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <div>
      <main
        className="row container d-flex align-items-center header-main"
        style={{ height: "600px" }}
      >
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: "#3A4256" }}>Appointment</h1>
          <Calendar onChange={handleDateChange} value={new Date()} />
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
    </div>
  );
};

export default AppointmentHeader;
