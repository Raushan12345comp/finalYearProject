import React from "react";
import Aiimg from "../assets/images/Aiimg.jpg";
import About_us from "../assets/images/About_us.svg";
import Question from '../assets/images/Question.svg'

const About = () => {
  return (
    <div className=" w-[85%] mx-auto ">
      <div>
        <div className="">
          <div className="uk-inline">
            <img
              src={Aiimg}
              className=" w-[100vw] object-cover  h-[40vh]"
              alt="image"
            />
            <div className="uk-overlay-primary uk-position-cover"></div>
            <div className="uk-position-center ">
              <p className="text-3xl text-white font-extrabold">ABOUT US</p>
            </div>
          </div>

          <div className=" my-10 flex sm:flex-col sm:my-5">
            <div className=" w-[50%] sm:w-[100%]">
              <img
                src={About_us}
                className=" w-full object-cover  h-full"
                alt="image"
              />
            </div>
            <div className="w-[50%] py-20 px-20 sm:w-[100%] sm:px-0 sm:text-center sm:py-4">
              <h1 className=" text-2xl font-semibold">About Aducator</h1>
              <p className=" my-3 leading-7 text-justify sm:text-center">
                Aducator is an Online Educational website in which users can
                upload their Projects , Publication Paper , and Registered Users
                can access free courses which Aducator admin upload.
              </p>
            </div>
          </div>

          <hr class="uk-divider-icon"></hr>

          <div className=" my-10 flex sm:flex-col sm:my-5">
            <div className="w-[50%] py-20 px-20 sm:w-[100%] sm:px-0 sm:text-center sm:py-4">
              <h1 className=" text-2xl font-semibold">Why Aducator</h1>
              <p className=" my-3 leading-7 text-justify sm:text-center">
                Aducator is a platform from which offer students multiple educational benefits Such as:
              
                <div className=" my-4">
                <ul>
                <li>Upload Free Papers & Projects</li>
                <li>Like , Follow and Comment on Posts</li>
                <li>Free Courses</li>
                <li>Free Email Messaging Services</li>
                <li>Secured Data And Account Verification.</li>
                </ul> 
                </div>
              </p>
            </div>

            <div className=" w-[50%] sm:w-[100%]">
              <img
                src={Question}
                className=" w-full object-cover  h-full"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
