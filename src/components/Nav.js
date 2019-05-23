import React from "react";
import WindowDimensionsProvider from "./windowDimensionsProvider";
import { GlobalStyles } from "./styles/global";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

function Nav() {
  return (
    <WindowDimensionsProvider>
      <GlobalStyles />
      <Header />
      <Navbar />
    </WindowDimensionsProvider>
  );
}

export default Nav;
