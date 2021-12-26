import React from "react";
import { theme } from "../assets/utils/theme";
import Navbar from "../navbar/Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <h1
        style={{
          fontSize: theme.fontSizes.h1,
        }}
      >
        AboutPage
      </h1>
    </div>
  );
};

export default AboutPage;
