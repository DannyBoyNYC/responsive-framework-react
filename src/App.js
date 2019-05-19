import React from "react";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i');

body {
  padding: 0;
  margin: 0;
  font-family: 'Source Sans Pro', Helvetica, Clean, sans-serif;
}
`;

const theme = {
  primary: "#bada55"
};

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.div`
  background-color: #333;
  height: 150px;
  padding: 20px;
  color: ${theme.primary};
`;
const AppTitle = styled.h1`
  font-weight: 900;
`;
const AppIntro = styled.p`
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`;
const EmojiWrapper = styled.span.attrs({
  role: "img"
})``;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        <AppHeader>
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          Bootstrapped with <code>create-react-app</code>.
        </AppIntro>
        <AppIntro>
          Components styled with <code>styled-components</code>{" "}
          <EmojiWrapper aria-label='nail polish' />
        </AppIntro>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
