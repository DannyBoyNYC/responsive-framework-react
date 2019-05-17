import React, { Component } from "react";
import styled from "styled-components";

const HamContainer = styled.button`
  display: block;
  padding: 8px 14px;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    filter: opacity(50%);
  }
`;

const HamBox = styled.span`
  width: 20px;
  height: 14px;
  display: inline-block;
  position: relative;
`;

const HamInner = styled.span`
  width: 20px;
  height: 2px;
  background-color: red;
  position: absolute;

  &::before,
  &::after {
    content: "";
    width: 20px;
    height: 2px;
    background-color: red;
    position: absolute;
    display: block;
  }
  &:before {
    top: -6px;
  }
  &:after {
    bottom: -6px;
  }
`;

class Hamburger extends Component {
  render() {
    return (
      <HamContainer>
        <HamBox>
          <HamInner />
        </HamBox>
      </HamContainer>
    );
  }
}

export default Hamburger;
