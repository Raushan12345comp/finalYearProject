import React from "react";
import { theme } from "../assets/utils/theme";
import Navbar from "../navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h1
        style={{
          fontSize: theme.fontSizes.h1,
        }}
      >
        ContactPage
      </h1>
    </div>
  );
};

export default Contact;
