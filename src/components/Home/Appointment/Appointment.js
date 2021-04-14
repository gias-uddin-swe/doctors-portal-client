import React from "react";
import doctor from "../../../images/doctor.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="doctor-appointment">
      <div className="appointment-container  ">
        <div className="row d-flex justify-content-center  w-75 m-auto">
          <div className="col-md-6">
            <img src={doctor} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 appointment-details">
            <h6>APPOINTMENT</h6>
            <h2 className="mt-3">
              Make an Appointment <br />
              Today
            </h2>
            <small className="mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore fugiat similique provident est deleniti? Obcaecati.
            </small>
            <div className="appointment-btn mt-3">
              <button className="btn btn-info mt-3">
                GET APPOINTMENT FREE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
