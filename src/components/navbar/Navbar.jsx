import React ,{useState , useEffect} from "react";
import "../style/Navbar.css";
// import Logo from '../img/Logo.png'
import {Link} from 'react-router-dom'

export default function NavBar() {

  return (
    <>
      <div className="sidebar_main">

	  <div className="menu_logo_mobile">
        <Link to="/">
        <h3 style={{fontWeight: 'bold'}}>ADUCATOR</h3>
        <p>Online Education & Learning</p>
        </Link>
        </div>
       
	   <div className="s_m_left">
	   <span
          class="uk-button uk-button-default uk-margin-small-right NavBurger"
          uk-toggle="target: #offcanvas-slide"
          uk-icon="icon: menu ; ratio:1.5"
        ></span>

        <div id="offcanvas-slide" uk-offcanvas="overlay: true">
          <div class="uk-offcanvas-bar sidebar">
            <div className="side_bar_header">
              <h3>Menu</h3>
              <span
                class="uk-offcanvas-close close_menu"
                uk-icon="icon: close"
              />
            </div>

            <hr class="uk-divider-icon" />

            <ul class="uk-list" style={{textDecoration: 'none'}}>
            <Link style={{textDecoration: 'none'}} to="/about"><li className="Links_nav_mobile">About</li></Link>
              <Link style={{textDecoration: 'none'}} to="/Courses"><li className="Links_nav_mobile">Courses</li></Link>
              <Link style={{textDecoration: 'none'}} to="/Team"><li className="Links_nav_mobile">Team</li></Link>
              <Link style={{textDecoration: 'none'}} to="/Digital_Library"><li className="Links_nav_mobile">Digital Library</li></Link>
              <Link style={{textDecoration: 'none'}} to="/Contact"><li className="Links_nav_mobile">Contact </li></Link>
              <Link style={{textDecoration: 'none'}} to="/Login"><li className="Links_nav_mobile">Login</li></Link>
            </ul>

            
          </div>

       
        </div>
	   </div>

		
      </div>

      <div className="pc_view">
        <div className="menu_logo">
        <Link to="/">
        <h3 style={{fontWeight: 'bold'}}>ADUCATOR</h3>
        <p>Online Education & Learning</p>
        </Link>
        </div>
        
        <div className="menu_Links">
          <ul class="Pc_links">
          <Link className='Nav_Link_PC' to="/about"><li>About</li></Link>
              <Link className='Nav_Link_PC' to="/Courses"><li>Courses</li></Link>
              <Link className='Nav_Link_PC' to="/Team"><li>Team</li></Link>
              <Link className='Nav_Link_PC' to="/Digital_Library"><li>Digital Library </li></Link>
              <Link className='Nav_Link_PC' to="/Contact"><li>Contact</li></Link>
              <Link className='Nav_Link_PC' to="/Login"><li>Login</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
}

