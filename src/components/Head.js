import React, { Component } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";

const HeadMain = styled.div`
  background-color: #fff;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class Head extends Component {
  render() {
    return (
      <HeadMain>
        <Hamburger />
      </HeadMain>
    );
  }
}

export default Head;
