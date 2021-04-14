import React, { useContext } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./AppointmentForm.css";
import { UserContext } from "../../../App";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const [user, setUser] = useContext(UserContext);
  console.log(date);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.title = appointmentOn;
    data.date = date;
    data.createdDate = new Date();
    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("You have Created Appointment Successfully");
          closeModal();
        }
      });
    console.log(data);
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h2 className="text-center">{appointmentOn}</h2>
          <p className="text-center">
            {" "}
            <small>{date.toDateString()}</small>{" "}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              className="popup-input"
              {...register("name", { required: true })}
              placeholder="Your Name"
            />
            <br />
            <input
              name="phone"
              className="popup-input"
              {...register("phone", { required: true })}
              placeholder="Phone Number"
            />
            <br />
            <input
              name="email"
              className="popup-input"
              {...register("email", { required: true })}
              placeholder="Email"
              defaultValue={user.email}
            />
            <br />

            <select className="genders" {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>

            <input
              className="gender"
              type="text"
              name="age"
              placeholder="Age"
            />
            <input
              className="gender"
              type="number"
              name="weight"
              id=""
              placeholder="Weight"
            />

            <br />
            <input className="popup-submit-btn" type="submit" />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
