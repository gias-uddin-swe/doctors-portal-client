import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="input-box row d-flex align-items-center mt-5">
      <div className="input-field w-100 m-auto text-center">
        <h6>CONTACT US</h6>
        <h2>Always Connect With Us</h2>
        <form action="">
          <input className="input-item" type="text" placeholder="your name" />
          <br />
          <input className="input-item" type="text" placeholder="your email" />
          <br />
          <input
            className="input-items"
            type="text"
            placeholder="your comments"
          />
          <br />
          <button className="btn btn-info w-50 mt-4" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
