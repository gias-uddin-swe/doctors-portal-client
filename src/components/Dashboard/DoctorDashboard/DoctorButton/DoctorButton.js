import React, { useState } from "react";
import AllPatient from "../../../Sheared/AllPatient/AllPatient";
import "../DoctorDashboard.css";

const DoctorButton = () => {
  const [control, setControl] = useState({
    pendingAppointments: false,
    totalAppointments: false,
    TodaysAppointments: false,
    totalPatients: false,
  });
  const handleControl1 = () => {
    const newControl = { ...control };
    newControl.pendingAppointments = true;
    newControl.totalAppointments = false;
    newControl.TodaysAppointments = false;
    newControl.totalPatients = false;
    setControl(newControl);
  };
  const handleControl2 = () => {
    const newControl = { ...control };
    newControl.pendingAppointments = false;
    newControl.totalAppointments = false;
    newControl.TodaysAppointments = true;
    newControl.totalPatients = false;
    setControl(newControl);
  };
  const handleControl3 = () => {
    const newControl = { ...control };
    newControl.pendingAppointments = false;
    newControl.totalAppointments = true;
    newControl.TodaysAppointments = false;
    newControl.totalPatients = false;
    setControl(newControl);
  };
  const handleControl4 = () => {
    const newControl = { ...control };
    newControl.pendingAppointments = false;
    newControl.totalAppointments = false;
    newControl.TodaysAppointments = false;
    newControl.totalPatients = true;
    setControl(newControl);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-lg-3 pending-div">
          <button
            onClick={handleControl1}
            className="d-flex justify-content-center pending-btn align-items-center bg-red"
          >
            <h1 className="mr-4">09</h1>
            <p>
              Pending <br /> Appointments
            </p>
          </button>
        </div>
        <div className="col-md-6 col-lg-3 pending-div">
          <button
            onClick={handleControl2}
            className="d-flex justify-content-center pending-btn align-items-center bg-blue"
          >
            <h1 className="mr-4">19</h1>
            <p>
              Today's <br /> Appointments
            </p>
          </button>
        </div>
        <div className="col-md-6 col-lg-3 pending-div">
          <button
            onClick={handleControl3}
            className="d-flex justify-content-center pending-btn align-items-center bg-green"
          >
            <h1 className="mr-4">19</h1>
            <p>
              Total <br /> Appointments
            </p>
          </button>
        </div>
        <div className="col-md-6 col-lg-3 pending-div">
          <button
            onClick={handleControl4}
            className="d-flex justify-content-center pending-btn align-items-center bg-yellow"
          >
            <h1 className="mr-4">19</h1>
            <p>
              Total <br /> Patients
            </p>
          </button>
        </div>
      </div>
      {control.totalPatients && (
        <div className="total-patient">
          <AllPatient></AllPatient>
        </div>
      )}
    </div>
  );
};
export default DoctorButton;
