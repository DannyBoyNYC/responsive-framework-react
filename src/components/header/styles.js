import styled, { keyframes } from 'styled-components';
import { device } from '../styles/device';

import search from '../art/search.svg';
import watchlist from '../art/watchlist.svg';
import briefcase from '../art/briefcase.svg';
import connect from '../art/connect.svg';

// Header
export const MainHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid var(--link);
`;
// Head
export const HeadMainDiv = styled.div`
  background-color: #fff;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position: fixed;
  // z-index: 900;
  // width: 100vh;
`;

// Hamburger
export const HamContainerBtn = styled.button`
  width: 48px;
  height: 32px;
  display: block;
  padding: 8px 14px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  &:hover {
    filter: opacity(50%);
  }
`;

export const HamOuterSpan = styled.span`
  width: 20px;
  height: 14px;
  display: inline-block;
  position: relative;
`;

export const HamInnerSpan = styled.span`
  width: 20px;
  height: 2px;
  background-color: var(--light-gray);
  position: absolute;

  display: block;
  top: 50%;

  &::before,
  &::after {
    content: '';
    width: 20px;
    height: 2px;
    background-color: var(--light-gray);
    position: absolute;
    display: block;
  }
  &::before {
    top: -6px;
  }
  &::after {
    bottom: -6px;
  }
`;

// Logo
export const LogoArt = styled.div`
  width: 32px;
  @media ${device.mobile} {
    width: 275px;
    margin-right: auto;
    display: block;
    padding: 0.25rem;
    padding-top: 0.5rem;
  }
`;

// Utilities
export const UtilityContainerUl = styled.ul`
  display: flex;
  white-space: nowrap;
  height: 22px;
  a {
    display: flex;
    font-size: 14px;
  }
  .util-title {
    display: none;
    @media ${device.tablet} {
      display: block;
    }
  }
  .search .util-icon {
    background-image: url(${search});
  }
  .watchlist .util-icon {
    background-image: url(${watchlist});
  }
  .briefcase .util-icon {
    background-image: url(${briefcase});
  }
  .connect .util-icon {
    background-image: url(${connect});
  }
  .util-icon {
    // display: block;
    width: 1.25rem;
    height: 1.25rem;
    padding-right: 1.5rem;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
export const UtilityListItem = styled.li`
  margin-left: 1rem;
`;

// User
export const UserContainer = styled.div`
  margin-left: 2rem;
  margin-right: 1rem;
`;

export const UserLink = styled.a`
  svg {
    width: 16px;
    height: 16px;
    fill: #007eb6;
    padding-top: 0.2rem;
  }
`;

// sidenav
export const FlexUl = styled.ul`
  display: flex;
  max-width: 100%;
  max-height: 2000px
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.2s linear;
  &.hidden {
    // display: none;
    max-width: 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    padding: 0;
  }
  @media ${device.tablet} {
    position: absolute;
    left: 200px;
    top: 70px;
    width: calc(100% - 240px);
  }
`;

export const FlyHeadA = styled.a`
  display: inline-block;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem;
`;

export const FlySubSpan = styled.span`
  display: inline-block;
  color: #333;
  font-weight: 600;
  padding-bottom: 0.25rem;
`;

// Flyout - sidenav

const FlyoutKeyframes = keyframes`
  0% {
    transform: translate(-700px, 0)
  }
  100% {
    transform: translate(0, 0)
  }
`;

export const FlyoutDiv = styled.div`
  background-color: var(--link);
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  animation-name: ${FlyoutKeyframes};
  animation-duration: 0.25s;
  animation-timing-function: cubic-bezier(0.37, 0.26, 0.6, 0.85),
    cubic-bezier(0.29, 0.22, 0.5, 1.2);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  @media ${device.tablet} {
    // background-color: red;s
  }
`;

export const CloserDiv = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
