import React from "react";
import { theme } from "../assets/utils/theme";
import Navbar from "../navbar/Navbar";

const Teams = () => {
  return (
    <div>
      <Navbar />
      <h1
        style={{
          fontSize: theme.fontSizes.h1,
        }}
      >
        Teams page , here we write about our teams
      </h1>
    </div>
  );
};

export default Teams;
