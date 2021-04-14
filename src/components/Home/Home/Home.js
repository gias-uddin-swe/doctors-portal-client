import React from "react";
import Appointment from "../Appointment/Appointment";
import Blog from "../Blog/Blog";
import Doctors from "../Doctors/Doctors";
import ExceptionalDental from "../ExceptionalDental/ExceptionalDental";
import Footer from "../../Sheared/Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <ExceptionalDental></ExceptionalDental>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <Doctors></Doctors>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
};

export default Home;
