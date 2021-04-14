import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const SIdebar = ({ handleAllPatient, handleAddDoctor }) => {
  const [user, setUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);

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
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/doctor/dashboard" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>

        {isDoctor && (
          <div>
            <li>
              <Link to="/doctor/appointment" className="text-white">
                <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
              </Link>
            </li>
            <li>
              <Link className="text-white" onClick={handleAllPatient}>
                <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/prescriptions" className="text-white">
                <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
              </Link>
            </li>
            <li>
              <Link className="text-white" onClick={handleAddDoctor}>
                <FontAwesomeIcon icon={faFileAlt} /> <span>Add Doctors</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/setting" className="text-white">
                <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SIdebar;
