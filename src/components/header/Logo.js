import React from "react";
import styled from "styled-components";
import { device } from "../styles/device";
// https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
import { ReactComponent as LogoType } from "../art/logo.svg";

const LogoArt = styled.div`
  width: 32px;
  @media ${device.mobile} {
    width: 275px;
    margin-right: auto;
    display: block;
    padding: 0.25rem;
    padding-top: 0.5rem;
  }
`;

function Logo() {
  return (
    <LogoArt>
      <LogoType />
    </LogoArt>
  );
}

export default Logo;
