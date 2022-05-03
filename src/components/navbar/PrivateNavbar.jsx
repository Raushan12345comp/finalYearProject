import React from "react";
import "../style/Navbar.css";
// import Logo from '../img/Logo.png'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/slices/users/userSlice";

export default function PrivateNavbar() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <div className="SideMenu flex justify-between items-center w-full">
        <div className=" flex justify-between items-center w-full py-2 px-2">
          <div className=" ">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h3 className=" text-xl font-bold">ADUCATOR</h3>
              <p className=" font-semibold">Online Education & Learning</p>
            </Link>
          </div>

          <div className=" ">
            <span
              className="uk-button uk-button-default uk-margin-small-right NavBurger"
              uk-toggle="target: #offcanvas-slide"
              uk-icon="icon: menu ; ratio:1.5"
            ></span>

            <div id="offcanvas-slide" uk-offcanvas="overlay: true">
              <div className="uk-offcanvas-bar sidebar">
                <div className="side_bar_header">
                  <h3>Menu</h3>
                  <span className="uk-offcanvas-close" uk-icon="icon: close" />
                </div>

                <hr className="uk-divider-icon" />
                <div className=" flex flex-col justify-between w-full h-[80vh] ">
                <ul className="uk-list" style={{ textDecoration: "none" }}>
                  <Link style={{ textDecoration: "none" }} to="/about">
                    <li className="Links_nav_mobile">Create</li>
                  </Link>
                  <Link className="Nav_Link_PC" to="/upload-project">
                  <li>Upload-Project</li>
                </Link>
                <Link className="Nav_Link_PC" to="/upload-paper">
                  <li>Upload-Paper</li>
                </Link>
                  <Link style={{ textDecoration: "none" }} to="/Team">
                    <li className="Links_nav_mobile">Authors</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/Team">
                    <li className="Links_nav_mobile">Profile</li>
                  </Link>
                  {/* <Link
                    style={{ textDecoration: "none" }}
                    to="/addNewCategory"
                  >
                    <li className="Links_nav_mobile">Add Category</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/addNewCategory">
                    <li className="Links_nav_mobile">Category List</li>
                  </Link> */}
                                    
                </ul>
              </div>

              <div>
                       <div onClick={logout} className=' flex justify-between w-full bottom-1  border-white'>
                       <p className=' text-lg font-semibold'>Logout</p>
                       <span uk-icon="icon: sign-out; ratio: 1.5"></span>
                       </div>
                     
                  </div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="pc_view flex w-[90%] mx-auto py-4 ">
        <div className="menu_logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className=" text-xl font-bold">ADUCATOR</h3>
            <p className=" font-semibold">Online Education & Learning</p>
          </Link>
        </div>

        <div className="menu_Links">
          <ul className="Pc_links">
            <Link className="Nav_Link_PC" to="/about">
              <li>Create</li>
            </Link>
            <Link className="Nav_Link_PC" to="/upload-project">
            <li>Upload-Project</li>
          </Link>
          <Link className="Nav_Link_PC" to="/upload-paper">
            <li>Upload-Paper</li>
          </Link>
            <Link className="Nav_Link_PC" to="/Team">
              <li>Profile</li>
            </Link>
            {/* <Link className="Nav_Link_PC" to="/addNewCategory">
              <li>Add Category</li>
            </Link>
            <Link className="Nav_Link_PC" to="/Contact">
              <li>Category List</li>
            </Link> */}
          
              <li onClick={logout}>Logout</li>
           
          </ul>
        </div>
      </div>
    </>
  );
}
