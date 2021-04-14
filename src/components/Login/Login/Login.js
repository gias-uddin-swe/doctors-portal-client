import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import login from "../../../images/login.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        const { displayName, email, photoURL } = user;
        const newUser = {
          name: displayName,
          email: email,
          photoURL: photoURL,
          isLoggedIn: true,
          showError: false,
          success: true,
        };
        setUser(newUser);
        handleStoreToken();
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        const userInfo = { ...user };
        userInfo.success = false;
        userInfo.showError = true;
        userInfo.error = errorMessage;
        userInfo.isLoggedIn = false;
        setUser(userInfo);
      });

    console.log(user);
    const handleStoreToken = () => {
      firebase
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem("token", idToken);
        })
        .catch(function (error) {
          // Handle error
        });
    };
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="text-center">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-5">
          <h1>This is Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="email"
              className="login-input"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            <input
              name="password"
              className="login-input"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            <br />
            <button className="btn btn-info mt-5 login-btn">Login</button>
          </form>
          <div className="firebase-btn">
            <button onClick={handleGoogleSignIn} className="btn google-btn">
              Sign-In with Google
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="login-image">
            <img src={login} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
