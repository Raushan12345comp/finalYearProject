import React from "react";
import "./Login.css";
import SignUpimg from "../assets/images/Login-cuate.svg";

import {useHistory} from 'react-router-dom'

export default function Login() {

    const history = useHistory()

    const LooginPage = () => {
        history.push('/Signup')
    }

  return (
    <div>
      <div className="Signup_main">
        <div className="Signup_wrapper">
          <div className="Signup_left" style={{background:' #bb8fce '}}>
            <img src={SignUpimg} alt="" />
          </div>

          <div className="Signup_right">

              <div className="Form_heading">
                  <h2>Welcome Back</h2>
                  <p onClick={LooginPage} style={{margin:"8px 0"}}>Create New Account</p>
              </div>

            <div className="form_main">
              <form>
                
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

               
              </form>

              
              <div className="signUp_btn">
              <button class="uk-button uk-button-primary sin_btn" style={{background:'#8e44ad '}}>
               Login<span uk-icon="icon:  arrow-right"></span>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
