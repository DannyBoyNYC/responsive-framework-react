import styled, { css } from 'styled-components';
import { device } from '../styles/device';

// navbar

export const MainNav = styled.nav`
  background-color: var(--link);
`;

export const NavlistUl = styled.ul`
  display: none;
  @media ${device.tablet} {
    // 760px
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .t-primeservices,
    .t-municipals,
    .t-rates,
    .t-indices {
      display: none;
    }
  }
  @media ${device.desktopSm} {
    // 980px
    .t-indices,
    .t-rates {
      display: block;
    }
  }
  @media ${device.desktop} {
    //1140px
    .t-indices,
    .t-rates,
    .t-municipals,
    .t-primeservices {
      display: block;
    }
  }
  @media ${device.desktopLg} {
    //1300px
  }
`;

// NAVITEMS
export const NavLinkLi = styled.li`
  position: relative;
  height: 46px;
  &.active {
    background-color: white;
    border-top: 1px solid var(--link);
    height: 46px;
    a {
      color: var(--link);
    }
  }
  &.t-home ul,
  &.t-barx ul,
  &.t-commodities ul,
  &.t-credit ul,
  &.t-crossasset ul,
  &.t-economics ul,
  &.t-emergingmarkets ul {
    left: -1px;
  }
  &.t-equities ul,
  &.t-fx ul,
  &.t-primeservices ul,
  &.t-municipals ul,
  &.t-rates ul,
  &.t-indices ul {
    right: -1px;
  }
  &.t-barx ul,
  &.t-commodities ul {
    columns: 1;
    min-width: 200px;
  }
  &.t-crossasset > ul,
  &.t-credit > ul,
  &.t-equities > ul,
  &.t-rates > ul {
    columns: 3;
    min-width: 600px;
  }
`;

export const NavlinkA = styled.a`
  cursor: pointer;
  display: inline-block;
  color: #fff;
  padding: 14px 10px;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 14px;
  &:hover {
    // text-decoration: underline;
    // font-weight: bold;
  }
`;
// dropdown menu
export const DropdownUl = styled.ul`
  position: absolute;
  min-width: 400px;
  background-color: #fff;
  padding: 1rem;
  padding-top: 0.5rem;
  border: 1px solid var(--link);
  border-top-width: 0px;
  column-count: 2;
  column-width: 140px;
  column-gap: 2rem;
  &.hidden {
    display: none;
  }
`;

// FLYOUT MENUS
// menu units inside flyouts
export const MenuitemsLi = styled.li`
  break-inside: avoid;
`;
// column headers in flyouts
export const MenuHeaderSpan = styled.span`
  display: inline-block;
  padding: 0.75rem 0 0.25rem 0;
  font-weight: 600;
`;

// flyout link
export const MenulinkA = styled.a`
  display: inline-block;
  padding: 0.25rem 0;
`;

// more
