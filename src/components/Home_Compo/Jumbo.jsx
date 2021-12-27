import React ,{useState , useEffect} from "react";
import "../style/Jumbo.css";
import Student_logo from "../assets/images/Student_logo.png";

export default function Jumbo() {


    

    const  [Search , setSearch] = useState("")

    const Jumbo_search = () => {
        alert(Search)
    }

  return (
    <div>
      <div className="Jumbo_main">
        <div className="Jumbo_wrapper">
          <div className="Jumbo_left">
            <div className="jumbo_heading">
              <h5>Welcome to ADUCATOR</h5>
              <h2>Best Online Education Expertise </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>

            <div className="Jumbo_btn">
              <button class="uk-button uk-button-primary home_btn">
                Get Started Now <span uk-icon="icon:  arrow-right"></span>
              </button>
              <button class="uk-button uk-button-secondary home_btn">
                View Courses
              </button>
            </div>

            <div className="social_input">
              <div className="social_jumbo">
                <span uk-icon="icon: instagram"></span>
                <span uk-icon="icon: github"></span>
                <span uk-icon="icon: twitter"></span>
                <span uk-icon="icon: facebook"></span>
              </div>

              <div className="Jumbo_search">
                    <section className='input'>
                    <input
                      class="uk-search-input"
                      type="search"
                      placeholder="Search Course..."
                      value={Search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                
                  <span onClick={Jumbo_search} uk-icon="icon: search" className="Jumbo_Search_icon"></span>
                    </section>
              </div>
            </div>
          </div>

          <div className="Jumbo_right">
            <img src={Student_logo} className="Student_logo" alt="Error" />
          </div>
        </div>
      </div>
    </div>
  );
}
