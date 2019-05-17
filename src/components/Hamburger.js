import React from 'react';
import styled from 'styled-components';

const HamContainer = styled.button`
  display: block;
  padding: 8px 14px;
  cursor: pointer;
  border: 0;
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
  background-color: var(--light-gray);
  position: absolute;

  display: block;
  top: 50%;

  &::before,
  &::after {
    content: "";
    width: 20px;
    height: 2px;
    background-color: var(--light-gray);
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

function Hamburger() {
  return (
    <HamContainer>
      <HamBox>
        <HamInner />
      </HamBox>
    </HamContainer>
  );
}

export default Hamburger;
