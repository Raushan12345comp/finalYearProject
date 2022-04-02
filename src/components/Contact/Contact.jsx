import React from 'react'
import { useGoogleMaps } from "react-hook-google-maps";
import "./Contact.css";


const Contact = () => {

  const KEY = process.env.REACT_APP_GOOGLE_AUTH_KEY

    const { ref, map, google } = useGoogleMaps(
      KEY,
        {
          center: { lat: 18.596024, lng: 73.924698 },
          zoom: 18
        }
      );

    return (
        <>
            
<div className="Contact_main">
        <div className="Contact_wrapper">

        <div className="Contact_left">
          <div ref={ref} style={{ width: "100%", height: "100%" }} />
          </div>
         

          <div className="Contact_right">
            <div className="C_right_wrapper">

              <div className="Contact_heading">
                <h2 style={{fontWeight: '600'}}>Contact us</h2>
                <p>We're open for any suggestion or just to have a chat</p>
              </div>

              <div className="Contact_locations">
                <div className="C_loc">
                  <h5>ADDRESS:</h5>
                  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>

                <div className="C_loc">
                  <h5>Email:</h5>
                  <p>123@gmail.com</p>
                </div>

                <div className="C_loc">
                  <h5>Phone:</h5>
                  <p>123 456 789</p>
                </div>
              </div>

              <div className="Contact_form">
                <div className="name_email">
                  <input
                    class="uk-input input_field_Contact"
                    required
                    type="text"
                    placeholder="Name"
                  />

                  <input
                    class="uk-input input_field_Contact"
                    required
                    type="email"
                    placeholder="Email"
                  />
                </div>

                <div className="Contact_Subject">
                <input
                    class="uk-input input_field"
                    required
                    type="text"
                    placeholder="Subject"
                  />
                </div>

                <div className="Contact_text_area">
                <textarea class="uk-textarea" rows="5" placeholder="Textarea"></textarea>
                </div>
              </div>

              <div className="Contact_Send_btn">
              <button class="uk-button uk-button-primary">Send Message</button>
              </div>

              <div className="Contact_social_main">
              <h4 tyle={{color: 'black' , fontWeight: '600'}}>Follow us here</h4>

              <div className="Contact_social_icons">
              <span uk-icon="icon: instagram"></span>
                <span uk-icon="icon: github"></span>
                <span uk-icon="icon: twitter"></span>
                <span uk-icon="icon: facebook"></span>
              </div>
              
              </div>
            </div>
          </div>

      
        </div>
      </div>
        </>
    )
}

export default Contact

