import React from "react";
import { GlobalStyles } from "./styles/global";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

function Nav() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Navbar />
    </>
  );
}

export default Nav;
