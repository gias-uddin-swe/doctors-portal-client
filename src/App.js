import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Appointment from "./components/Appoinment/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
// import AddDoctors from "./components/Dashboard/AddDoctors/AddDoctors";
import Menubar from "./components/Sheared/Menubar/Menubar";
// import DoctorDashboard from "./components/Dashboard/DoctorDashboard/DoctorDashboard";
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    isLoggedIn: false,
    photoURL: "",
    showError: false,
    success: false,
    error: "",
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Link to="/dashboard/appointment">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/appointment">Appointment</Link>
        <Link to="/">home</Link>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/dashboard/appointment">
            <Dashboard></Dashboard>
          </Route>
          {/* <Route path="/doctor/dashboard">
            <DoctorDashboard></DoctorDashboard>
          </Route> */}
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
