// loading react and hooks
import React, { useState, useEffect } from 'react';
import SubMenu from './Submenu';
// styled components
import styled from 'styled-components';
// fake data for drop downs
import menuJSON from '../data/menu.json';

const NavlinkA = styled.a`
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

const DropdownUl = styled.ul`
  position: absolute;
  background-color: #fff;
  padding: 1rem;
  border: 1px solid #999;
  display: flex;
  flex-direction: row;
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
      <NavlinkA onClick={() => menuController}>
        {props.section}
      </NavlinkA>
      <DropdownUl hidden={vis ? '' : 'hidden'}>
        {Object.keys(props.subsections).map((subSec, key) =>
          <SubMenu key={key} subSec={subSec} links={props.subsections} />,
        )}
      </DropdownUl>
    </li>
  );
}

export default NavItem;
