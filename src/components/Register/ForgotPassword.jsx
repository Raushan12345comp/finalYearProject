import React from "react";
import "../Register/Forgot_pass.css";
import FPImage from "../assets/images/Forgot password-cuate.svg";

export default function ForgotPassword() {
  return (
    <div>
      <div className="forgot_pass_main">
        <div className="forgot_pass_wrapper">
          <div className="forgot_pass_left">
            <img src={FPImage} className="forgot_pass_left" alt="Error" />
          </div>

          <div className="forgot_pass_right">
            <div className="forgot_password_heading">
              <h2>Reset Your Password Easily</h2>
            </div>

            <div className="Name_form_FP">
              <span className="FOrm_icon" uk-icon="icon: mail"></span>
              <input
                className="uk-input input_field_signup"
                required
                type="email"
                placeholder="Enter Email"
              />
            </div>

            <div className="signUp_btn">
              <button
                className="uk-button uk-button-primary sin_btn"
                style={{ background: "#FB3D1C " }}
              >
                Submit<span uk-icon="icon:  arrow-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
