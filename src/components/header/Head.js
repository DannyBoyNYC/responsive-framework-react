import React from "react";

import styled from "styled-components";

import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Utilities from "./Utilities";

const HeadMain = styled.div`
  background-color: #fff;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Head() {
  return (
    <HeadMain>
      <Hamburger />
      <Logo />
      <Utilities />
    </HeadMain>
  );
}

export default Head;
