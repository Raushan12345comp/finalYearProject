import React from "react";
import { useSelector } from "react-redux";

import AdminNavbar from "./AdminNavbar";
import PrivateNavbar from "./PrivateNavbar";
import PublicNavbar from "./PublicNavbar";

const NavMain = () => {
  //ge user from store
  const state = useSelector(state => state.user);
  const { userAuth } = state;
  const isAdmin = userAuth?.isAdmin;

  return (
    <>
       {isAdmin ? (
        <AdminNavbar />
      ) : userAuth ? (
        <PrivateNavbar />
      ) : (
        <PublicNavbar />
      )}
    </>
  );
};

export default NavMain;
