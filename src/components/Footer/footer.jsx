import React from 'react'
import {Link} from 'react-router-dom'
import '../style/footer.css'

export default function footer() {
    return (
        <>
          <div>
      <div className="footer_main">
        <div className="footer_wrapper">
          <div className="f_about">
            <h3 style={{color:'#fff'}}>About</h3>
            <p>
              Hello there! I'm Kumar Subhojit. I'm a Web Developer and Software
              Developer Hard-Working individual with proficiency in web
              development and App development, as well as strong skills and
              ability in writing clean and efficient code. I'm a quick learner
              and always want to learn more and more, to enhance my skills. A
              strong individual and contributor as well as team player.
            </p>
          </div>

          <div className="Links_f">
            <h3 style={{color:'#fff'}}>Links</h3>
            <ul class="uk-list">
            <Link  style={{textDecoration: 'none'}} to="/about">  <li className="footer_Links"> <span uk-icon="icon:  arrow-right"></span> About</li></Link>
            <Link  style={{textDecoration: 'none'}} to="/courses"><li className="footer_Links"> <span uk-icon="icon:  arrow-right"></span> Courses</li></Link>
            <Link  style={{textDecoration: 'none'}} to="/Team"><li className="footer_Links"> <span uk-icon="icon:  arrow-right"></span> Team</li></Link>
            <Link  style={{textDecoration: 'none'}} to="/">  <li className="footer_Links"> <span uk-icon="icon:  arrow-right"></span> Digital Library</li></Link>
            <Link  style={{textDecoration: 'none'}} to="/Contact"><li className="footer_Links"> <span uk-icon="icon:  arrow-right"></span> Contact</li></Link>
            <Link  style={{textDecoration: 'none'}} to="/Login"> <li className="footer_Links"> <span uk-icon="icon:  arrow-right"></span> Login</li></Link>

            </ul>
          </div>

          <div className="Services_f">
            <h3 style={{color:'#fff'}}>Courses</h3>
            <ul class="uk-list">
              <li> <span uk-icon="icon:  arrow-right"></span> Front-End Development</li>
              <li> <span uk-icon="icon:  arrow-right"></span> Website Design</li>
              <li> <span uk-icon="icon:  arrow-right"></span> Logo Design</li>
              <li> <span uk-icon="icon:  arrow-right"></span> Back-End Development</li>
              <li> <span uk-icon="icon:  arrow-right"></span> Data Base Management</li>
            </ul>
          </div>

          <div className="location_f">
            <h3 style={{color:'#fff'}}>Have a Questions?</h3>
            <div className="location__F"  style={{margin:"15px 0"}}>
            <span uk-icon="icon: location" style={{ fontSize:"17px" , paddingRight:'6px'}}></span>
            <p>Wagholi ,Pune,Maharastra,India</p>
            </div>

            <div className="phone" style={{margin:"15px 0"}}>
            <span uk-icon="icon: receiver" style={{ fontSize:"17px" , paddingRight:'6px'}}></span>
            <p>+123 456 789</p>
            </div>

            <div className="mail"  style={{margin:"15px 0"}}>
            <span uk-icon="icon: mail" style={{ fontSize:"17px" , paddingRight:'6px'}}></span>
            <p>123@gmail.com</p>
            </div>
          </div>



          
        </div>

        <div className="footer_low">
          Copyright ©2021 All rights reserved | ADUCATOR
          </div>
      </div>
    </div>   
        </>
    )
}
