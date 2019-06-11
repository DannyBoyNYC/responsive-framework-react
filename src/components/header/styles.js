import styled from 'styled-components';
import { device } from '../styles/device';

import search from '../art/search.svg';
import watchlist from '../art/watchlist.svg';
import briefcase from '../art/briefcase.svg';
import connect from '../art/connect.svg';

// Head
export const HeadMain = styled.div`
  background-color: #fff;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Hamburger
export const HamContainer = styled.button`
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

export const HamBox = styled.span`
  width: 20px;
  height: 14px;
  display: inline-block;
  position: relative;
`;

export const HamInner = styled.span`
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
export const UtilityContainer = styled.ul`
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
  &.hidden {
    display: none;
  }
`;
