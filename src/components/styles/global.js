// DOCS
// Attached to the body tag

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
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
