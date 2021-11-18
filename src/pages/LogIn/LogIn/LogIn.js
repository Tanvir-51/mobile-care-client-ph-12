import React from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogInForm from "../LogInForm/LogInForm";
import "./LogIn.css";
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from "react-router";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import "./LogIn.css";
const LogIn = () => {
  window.scrollTo(0, 0);
  const {
    user,
    setUser,
    signInUsingGoogle,
    isLoading,
    setIsLoading,
    signInUser,
    saveUser,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  if (user.displayName || user.email) {
    history.push("./home");
  }
  const redirect_uri = location.state?.from || "/home";
  function handleSignInUsingGoogle() {
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        saveUser(result.user.email, result.user.displayName, "put");
        // console.log(result.user.displayName)
        history.push(redirect_uri);
        swal({
          title: "You are Successfully Logged In!",
          icon: "success",
          button: "Ok",
        });
      })
      .catch((error) => {
        console.log(error.message);
        swal({
          title: error.message,
          icon: "error",
          buttons: true,
          dangerMode: true,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleLogIn(email, password) {
    signInUser(email, password)
      .then((res) => {
        // console.log('success');
        setUser(res.user);
        history.push(redirect_uri);
        swal({
          title: "You are Successfully Logged In!",
          icon: "success",
          button: "Ok",
        });
      })
      .catch((error) => {
        console.log(error.message);
        swal({
          title: "Please Check Your Email or Password",
          text: error.message,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  if (isLoading) {
    return (
      <div className="mt-5 pt-5 text-center" style={{ height: "100vh" }}>
        <Spinner animation="grow"></Spinner>
      </div>
    );
  } else {
    return (
      <div>
        <div className="mt-5 pt-5 mb-4">
          <div className="p-sm-5 px-3 py-4 bg-white rounded shadow mx-auto container-of-form">
            <LogInForm clickHandler={handleLogIn}></LogInForm>
            <div className="text-center my-2">
              <Link to="/register" className=" text-center">
                Need an account?
              </Link>
            </div>
            <hr />
            <p className="text-secondary text-center"> OR </p>
            <button
              className="w-100 my-3 btn btn-outline-info fw-bold "
              onClick={handleSignInUsingGoogle}
            >
              <span className=" me-2">
                <FcGoogle className="fs-3" />
              </span>
              Sign In Using Google
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default LogIn;
