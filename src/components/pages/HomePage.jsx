import React from "react";
import { theme } from "../assets/utils/theme";
import Navbar from "../navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1
        style={{
          fontSize: theme.fontSizes.h1,
        }}
      >
        HomePage
      </h1>
      <div>
        <h2>
          Here we give two options to users i.e. <br />
          1. STUDENT <br />
          2. FACULTY <br />
          then we redirect the the user to the faculty login page or student
          login page
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
