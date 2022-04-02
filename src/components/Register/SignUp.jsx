import React from "react";
import "./Login.css";
import SignUpimg from "../assets/images/Login-rafiki.svg";
import {useHistory} from 'react-router-dom'


export default function SIgnUp() {

    const history = useHistory()

    const LooginPage = () => {
        history.push('/Login')
    }


  return (
    <div>
      <div className="Signup_main">
        <div className="Signup_wrapper">
          <div className="Signup_left">
            <img src={SignUpimg} alt="" />
          </div>

          <div className="Signup_right">

              <div className="Form_heading">
                  <h2>Start Your Awesome Journry Right Now</h2>
                  <p onClick={LooginPage} style={{margin:"8px 0" , color:" #218FF2 "}}>Already have an Account</p>
              </div>

            <div className="form_main">
              <form>
                <div className="Name_form">
                  <span className='FOrm_icon' uk-icon="icon: user"></span>
                  <input
                    class="uk-input input_field_signup"
                    required
                    type="text"
                    placeholder="Enter Name"
                  />
                </div>

                <div className="Name_form">
                  <span className='FOrm_icon' uk-icon="icon: mail"></span>
                  <input
                    class="uk-input input_field_signup"
                    required
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>

                <div className="Name_form">
                  <span className='FOrm_icon' uk-icon="icon: lock"></span>
                  <input
                    class="uk-input input_field_signup"
                    required
                    type="password"
                    placeholder="Enter password"
                  />
                </div>

                <div className="Name_form">
                  <span className='FOrm_icon' uk-icon="icon: lock"></span>
                  <input
                    class="uk-input input_field_signup"
                    required
                    type="text"
                    placeholder="Re-Enter Password"
                  />
                </div>
              </form>

              
              <div className="signUp_btn">
              <button class="uk-button uk-button-primary sin_btn">
               Register Now<span uk-icon="icon:  arrow-right"></span>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
