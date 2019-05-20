// loading react and hooks
import React, { useState, useEffect } from "react";
import SubMenu from "./Submenu";
// styled components
import styled from "styled-components";
// fake data for drop downs
import menuJSON from "../data/menu.json";

const NavLink = styled.a`
  cursor: pointer;
  display: inline-block;
  color: #fff;
  padding: 14px 10px;
  white-space: nowrap;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const DropDown = styled.ul`
  position: absolute;
  // left: 2rem;
  // width: calc(100vw - 6rem);
  background-color: #fff;
  padding: 1rem;
  border: 1px solid #999;
`;

function NavItem(props) {
  let [vis, setVis] = useState(true);

  useEffect(() => {
    // console.log(props.section);
  });

  const menuController = event => {
    event.preventDefault();
    // console.log("props.section");
  };

  return (
    <li
    // onMouseEnter={() => setVis((vis = !vis))}
    // onMouseLeave={() => setVis((vis = !vis))}
    >
      {/* {console.log(props.subsections)} */}
      <NavLink onClick={() => menuController}>{props.section}</NavLink>
      <DropDown hidden={vis ? "" : "hidden"}>
        {Object.keys(props.subsections).map((subSec, index) => (
          <SubMenu key={index} subSec={subSec} links={subSec} />
        ))}
      </DropDown>
    </li>
  );
}

export default NavItem;
