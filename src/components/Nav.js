import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";

const breakpoints = [
  '81.25em', '71.25em', '61.25em', '46.25em', '22.5em'
]
// 1300px, 1140, 980, 760, 360 https://styled-system.com/guides/build-a-box
const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[4]})`,
  medium: `@media screen and (min-width: ${breakpoints[2]})`,
  large: `@media screen and (min-width: ${breakpoints[0]})`,
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i,700');
:root {
  --link: #007eb6;
  --cyan: #00aeef;
  --dark-gray: #333333;
  --medium-gray: #666666;
  --light-gray: #999999;
  --lightest-gray: #bbbbbb;
}
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Source Sans Pro', Helvetica, Clean, sans-serif;
  color: var(--dark-gray)
}
a {
  text-decoration: none;
  color: var(--link);
}
ul {
  list-style: none;
}
`;

function NavFunc() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default NavFunc;
