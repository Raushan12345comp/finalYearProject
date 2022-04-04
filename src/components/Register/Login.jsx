import React from "react";
import "./Login.css";
import SignUpimg from "../assets/images/Login-cuate.svg";

import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const LooginPage = () => {
    history.push("/Signup");
  };

  const ForgotPassword = () => {
    history.push("/ForgotPassword");
  };

  return (
    <div>
      <div className="Signup_main">
        <div className="Signup_wrapper">
          <div className="Signup_left" style={{ background: " #bb8fce " }}>
            <img src={SignUpimg} alt="" />
          </div>

          <div className="Signup_right">
            <div className="Form_heading">
              <h2>Welcome Back</h2>
              <p onClick={LooginPage} style={{ margin: "8px 0" }}>
                Create New Account
              </p>
            </div>

            <div className="form_main">
              <form>
                <div className="Name_form">
                  <span className="FOrm_icon" uk-icon="icon: mail"></span>
                  <input
                    className="uk-input input_field_signup"
                    required
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>

                <div className="Name_form">
                  <span className="FOrm_icon" uk-icon="icon: lock"></span>
                  <input
                    className="uk-input input_field_signup"
                    required
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
              </form>

              <div className=" flex justify-between items-center">
                <button
                  type="submit"
                  className=" text-center bg-primeBlue text-white py-2 px-4 mt-5 mb-2 mx-auto rounded-full"
                >
                  Log-In
                </button>
              </div>

              <div className="Forgot_password">
                <hr className="uk-divider-icon" />
                <h5 onClick={ForgotPassword}>Forgot Password</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
