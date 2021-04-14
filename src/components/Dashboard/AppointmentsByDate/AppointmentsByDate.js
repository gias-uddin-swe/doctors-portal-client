import React from "react";
import AppointmentShortList from "../AppointmentShortList/AppointmentShortList";

const AppointmentsByDate = ({ appointments }) => {
  return (
    <div>
      <h1 className="text-center">Appointments</h1>
      {appointments.length ? (
        <AppointmentShortList
          appointments={appointments}
        ></AppointmentShortList>
      ) : (
        <div className="text-center">
          <p>No Appointment for this date</p>
        </div>
      )}
    </div>
  );
};

export default AppointmentsByDate;
