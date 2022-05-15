import { useFormik } from "formik";
import * as Yup from "yup";
import FPImage from "../assets/images/Forgot password-cuate.svg";
import "../Register/Forgot_pass.css";
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { passwordResetTokenAction } from "../../redux/slices/users/userSlice";

const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
});

export default function ForgotPassword() {

    const dispatch = useDispatch();
    //formik
    const formik = useFormik({
      initialValues: {
        email: "",
      },
      onSubmit: values => {
        //dispath the action
        dispatch(passwordResetTokenAction(values?.email));
      },
      validationSchema: formSchema,
    });
    const users = useSelector(state => state?.user);
  const { passwordToken, loading, appErr, serverErr } = users;
  return (
    <div>
      <div className="forgot_pass_main">
        <div className="forgot_pass_wrapper">
          <div className="forgot_pass_left">
            <img src={FPImage} className="forgot_pass_left" alt="Error" />
          </div>

          <div className="forgot_pass_right">
          <form onSubmit={formik.handleSubmit}>
            <div className="forgot_password_heading">
              <h2 className=' py-3 font-semibold text-xl'>Reset Your Password Easily</h2>
            </div>

          <div className=' w-[90%] mx-auto '>
          <div className="Name_form_FP">
              <span className="FOrm_icon" uk-icon="icon: mail"></span>
              <input
                className="uk-input input_field_signup"
                required
                type="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                placeholder="Enter Email"
              />
            </div>

            <div className="signUp_btn">
              <button
                className="uk-button uk-button-primary sin_btn"
                style={{ background: "#FB3D1C " }}
              >
                Submit
              </button>
            </div>
          </div></form>
          </div>
        </div>
      </div>
    </div>
  );
}
