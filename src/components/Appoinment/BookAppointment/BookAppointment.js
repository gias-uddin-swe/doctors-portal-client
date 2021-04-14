import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const BookAppointment = ({ date }) => {
  const bookingData = [
    {
      id: 1,
      subject: "Teeth Orthodontics",
      visitingHour: "8:00 Am  -  9:00 Am",
      totalSpace: "total Available bed Now 10",
    },
    {
      id: 2,
      subject: "Teeth Orthodontics",
      visitingHour: "8:00 Am  -  9:00 Am",
      totalSpace: "total Available bed Now 10",
    },
    {
      id: 3,
      subject: "Teeth Orthodontics",
      visitingHour: "8:00 Am  -  9:00 Am",
      totalSpace: "total Available bed Now 10",
    },
    {
      id: 4,
      subject: "Teeth Orthodontics",
      visitingHour: "8:00 Am  -  9:00 Am",
      totalSpace: "total Available bed Now 10",
    },
    {
      id: 5,
      subject: "Teeth Orthodontics",
      visitingHour: "8:00 Am  -  9:00 Am",
      totalSpace: "total Available bed Now 10",
    },
    {
      id: 6,
      subject: "Teeth Orthodontics",
      visitingHour: "8:00 Am  -  9:00 Am",
      totalSpace: "total Available bed Now ",
    },
  ];
  return (
    <section>
      <h2 className="text-center">
        Available Appointment On {date.toDateString()}
      </h2>
      <div className="row w-75 d-flex align-items-center header-main m-auto">
        {bookingData.map((booking) => (
          <BookingCard
            BookingCard={BookingCard}
            date={booking}
            key={booking.id}
            time={date}
          ></BookingCard>
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;
