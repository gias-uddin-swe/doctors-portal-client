import React, { useState } from "react";
import Footer from "../../Sheared/Footer/Footer";
import Menubar from "../../Sheared/Menubar/Menubar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppointment/BookAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Menubar></Menubar>
      <AppointmentHeader
        handleDateChange={handleDateChange}
      ></AppointmentHeader>
      <BookAppointment date={selectedDate}></BookAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
