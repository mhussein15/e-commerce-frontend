import React from "react";
import SignInForm from "../SignInForm";
import SignUpForm from "../SignUpForm/index";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthPage() {
  const user = useSelector((state) => state.authReducer.user);
  
  if (user) return <Redirect to="/" />;

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ width: "100vh", height: "75vh" }}
      >
        <div className="row">
          <div className="col-6 border-right">
            <div>
              <SignUpForm />
            </div>
          </div>
          <div className="col-6">
            <SignInForm />
          </div>
        </div>
      </div>
    </>
  );
}
