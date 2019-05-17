import React, { Component } from "react";
import styled from "styled-components";

const HamButton = styled.button`
  padding: 8px 14px;
  cursor: pointer;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
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
  display: block;
  top: 50%;
  width: 20px;
  height: 2px;
  background-color: red;
  position: absolute;

  &::before {
    content: "";
    width: 20px;
    height: 2px;
    background-color: red;
    position: absolute;
    top: -6px;
  }

  &::after {
    content: "";
    width: 20px;
    height: 2px;
    background-color: red;
    position: absolute;
    bottom: -6px;
  }
`;

class Hamburger extends Component {
  render() {
    return (
      <HamButton>
        <HamBox>
          <HamInner />
        </HamBox>
      </HamButton>
    );
  }
}

export default Hamburger;
