import React, { useEffect, useState } from "react";
// import doctor from "../../../images/doctor.png";
import "./Doctors.css";

const Doctors = () => {
  //   const doctors = [
  //     {
  //       image: doctor,
  //       name: "Mr.Jack Ma",
  //       phone: "+880124587458",
  //     },
  //     {
  //       image: doctor,
  //       name: "Mr.Jack Ma",
  //       phone: "+880124587458",
  //     },
  //     {
  //       image: doctor,
  //       name: "Mr.Jack Ma",
  //       phone: "+880124587458",
  //     },
  //   ];
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="mt-5 ">
      <h3 className="text-center">Our Doctors</h3>
      <div className="row d-flex justify-content-center align-items-center">
        {doctors.map((doc) => (
          <div className="col-md-4">
            <div className="doctor-pic">
              <img src={`http://localhost:5000/${doc.image.img}`} alt="" />
            </div>
            <div>
              <h5>{doc.name}</h5>
              <p>{doc.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
