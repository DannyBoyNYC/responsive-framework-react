import styled from "styled-components";

import { device } from "../styles/device";

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
    .t-equities ul,
    .t-fx ul,
    .t-primeservices ul,
    .t-municipals ul,
    .t-rates ul,
    .t-indices ul {
      right: 1rem;
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

// flyout menus

export const MenuitemsLi = styled.li`
  padding-right: 1.5rem;
  flex: 1;
  // flex-basis: 120px;
`;
export const MenuHeaderSpan = styled.span`
  display: inline-block;
  padding-bottom: 0.5rem;
`;

// navitems

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

export const DropdownUl = styled.ul`
  position: absolute;
  background-color: #fff;
  padding: 1rem;
  border: 1px solid var(--link);
  border-top-width: 0px;
  // display: flex;
  // flex-direction: row;
  columns: 200px 2;
  column-gap: 1rem;
  &.hidden {
    display: none;
  }
  > li {
    // break-after: avoid-column;
    color: red !important;
    a {
      color: red !important;
    }
  }
`;

// item

export const MenulinkA = styled.a`
  display: inline-block;
  padding: 0.25rem 0;
`;

// more
