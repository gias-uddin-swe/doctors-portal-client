import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../../App";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import DoctorButton from "../DoctorDashboard/DoctorButton/DoctorButton";
import DoctorDashboard from "../DoctorDashboard/DoctorDashboard";
import SIdebar from "./../Sidebar/Sidebar";
import AddDoctors from "./../AddDoctors/AddDoctors";
import AllPatient from "../../Sheared/AllPatient/AllPatient";

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  console.log(appointments);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: selectedDate, email: user.email }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setAppointments(result);
      });
  }, [selectedDate]);

  const [isDoctor, setIsDoctor] = useState(false);

  const [addDoctors, setAddDoctors] = useState(false);
  const [patients, setPatient] = useState(false);

  const handleAddDoctor = () => {
    setPatient(false);
    setAddDoctors(true);
  };

  const handleAllPatient = () => {
    setAddDoctors(false);
    setPatient(true);
    console.log("hoise bosss");
  };

  useEffect(() => {
    fetch("http://localhost:5000/isDoctor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsDoctor(data));
  }, []);

  return (
    <section>
      <div className="row container-fluid">
        <div className="col-md-2 col-sm-12">
          <SIdebar handleAddDoctor={handleAddDoctor}></SIdebar>
        </div>
        {addDoctors ? (
          <div className="col-md-8 col-sm-12 row d-flex align-items-center justify-content-center">
            {patients && (
              <AllPatient handleAllPatient={handleAllPatient}></AllPatient>
            )}
            <div>
              <AddDoctors></AddDoctors>
            </div>
          </div>
        ) : (
          <div className="col-md-10">
            <div className="row d-flex align-items-center justify-content-center">
              {isDoctor && <DoctorButton></DoctorButton>}
              <div className="col-md-5 mt-3">
                <Calendar onChange={handleDateChange} value={new Date()} />
              </div>

              <div className="col-md-5">
                <AppointmentsByDate
                  appointments={appointments}
                ></AppointmentsByDate>
              </div>
            </div>
          </div>
        )}
        {/* <AllPatient></AllPatient> */}
      </div>
    </section>
  );
};

export default Dashboard;
