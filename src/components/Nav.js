import React, { Component } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i');
body {
  padding: 0;
  margin: 0;
  font-family: 'Source Sans Pro', Helvetica, Clean, sans-serif;
}
`;

class Nav extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <p>Header</p>
      </>
    );
  }
}

export default Nav;
