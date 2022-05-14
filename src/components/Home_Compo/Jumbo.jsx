import React, { useState, useEffect } from "react";
import "../style/Jumbo.css";
import {Link} from 'react-router-dom'
import Student_logo from "../assets/images/Student_logo.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import dark from "../../components/assets/images/dark.jpg";
import soft from "../../components/assets/images/soft.jpg";

export default function Jumbo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Search, setSearch] = useState("");

  const Jumbo_search = () => {
    alert(Search);
  };

  return (
    <div>
      <div className="Jumbo_main">
        <div className="Jumbo_wrapper">
          <div className="Jumbo_left">
            <div className="jumbo_heading">
              <h5 className=" text-3xl font-bold">WELCOME TO ADUCATOR</h5>
              <h2 className=" text-lg text-gray-600">
                Best Online Education Expertise{" "}
              </h2>
              <p className=" w-[60%] sm:w-[100%]">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>

            <div className="Jumbo_btn">
              <button
                onClick={onOpen}
                className="uk-button uk-button-primary home_btn"
              >
                Get Started Now
              </button>
             <Link to="allcourses">
             <button className="uk-button uk-button-secondary home_btn">
             View Courses
           </button>
             </Link>
            </div>

            <div className="social_input">
              <div className="social_jumbo">
                <span className="social-icons" uk-icon="icon: instagram"></span>
                <span className="social-icons" uk-icon="icon: github"></span>
                <span className="social-icons" uk-icon="icon: twitter"></span>
                <span className="social-icons" uk-icon="icon: facebook"></span>
              </div>

              {/* <div className="Jumbo_search">
                <section className="input">
                  <input
                    className="uk-search-input"
                    type="search"
                    placeholder="Search Course..."
                    value={Search}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  <span
                    onClick={Jumbo_search}
                    uk-icon="icon: search"
                    className="Jumbo_Search_icon"
                  ></span>
                </section>
              </div> */}
            </div>
          </div>

          <div className=" sm:hidden">
            <img src={Student_logo} className="Student_logo" alt="Error" />
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Brief Introduction of Aducator</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div
              className="uk-position-relative uk-visible-toggle "
              tabindex="-1"
              uk-slideshow="animation: push"
            >
              <ul className="uk-slideshow-items">
                <li className=" rounded-xl">
                  <img src={dark} alt="" uk-cover />
                  <div className="uk-position-center uk-position-small uk-text-center uk-light">
                    <p className="uk-margin-remove text-3xl font-bold">
                      Welcome to Aducator </p>
                      <p>we have different options for a Student lets Explore..</p>
                  </div>
                </li>
                <li>
                  <img src={dark} alt="" uk-cover />
                  <div className="uk-position-top uk-position-medium uk-text-center uk-light">
                   
                    <p className="uk-margin-remove text-3xl font-bold">
                    1ST </p>
                    <p>Free Courses..</p>
                    <p>Diffrerent Teachers can upload courses</p>
                 
                  </div>
                </li>
                <li>
                  <img src={soft} alt="" uk-cover />
                  <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center">
                  <p className="uk-margin-remove text-3xl font-bold">
                  2ND </p>
                  <p>Upload Projects</p>
                  </div>
                </li>
                <li>
                  <img src={dark} alt="" uk-cover />
                  <div className="uk-overlay uk-overlay-default uk-position-bottom-right uk-position-small">
                  <p className="uk-margin-remove text-3xl font-bold">
                  3ND </p>
                  <p>Upload Paper</p>
                  </div>
                </li>
              </ul>

              <div className="uk-light">
                <a
                  className="uk-position-center-left uk-position-small uk-hidden-hover text-black"
                  href="#"
                  uk-slidenav-previous
                  uk-slideshow-item="previous"
                ></a>
                <a
                  className="uk-position-center-right uk-position-small uk-hidden-hover text-black"
                  href="#"
                  uk-slidenav-next
                  uk-slideshow-item="next"
                ></a>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <button mr={3} onClick={onClose}>
              Close
            </button>

          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
