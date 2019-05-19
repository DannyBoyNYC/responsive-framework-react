import React from "react";

import styled from "styled-components";

import { menuData } from "../data/menu";

const NavListItem = styled.li``;

const NavLink = styled.a`
  display: inline-block;
  color: #fff;
  padding: 10px 8px;
  white-space: nowrap;
  font-size: 14px;
`;

const DropDown = styled.ul`
  position: absolute;
`;

function menuController(key) {
  console.log(key);
}

function NavItem(props) {
  return (
    <li>
      <NavLink href={props.link} onClick={menuController(props.link)}>
        {props.link}
      </NavLink>
      <DropDown>
        <li>Submenu Item</li>
        <li>Submenu Item</li>
        <li>Submenu Item</li>
        <li>Submenu Item</li>
        <li>Submenu Item</li>
      </DropDown>
    </li>
  );
}

export default NavItem;
