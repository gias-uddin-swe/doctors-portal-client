import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ date, time }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(modalIsOpen);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4  container">
      <div className="m-3 border bg-light ">
        <div className="text-center">
          <h5 className="mt-3">{date.subject}</h5>
          <h3 className="mt-4">{date.visitingHour}</h3>
          <small>{date.totalSpace}</small>
        </div>
        <div className="text-center mt-4 pb-4">
          <button onClick={openModal} className="btn btn-info ">
            Book Appointment
          </button>
          <AppointmentForm
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            appointmentOn={date.subject}
            date={time}
          ></AppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
