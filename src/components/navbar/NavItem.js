// loading hooks
import React, { useState, useEffect } from 'react';

import SubMenu from './Submenu';
// styled components
import styled from 'styled-components';
// fake data for drop downs
import { menuData } from '../data/menu';

const NavListItem = styled.li``;

const NavLink = styled.a`
  cursor: pointer;
  display: inline-block;
  color: #fff;
  padding: 14px 10px;
  white-space: nowrap;
  font-size: 14px;
  &:hover {
    background-color: #fff;
    color: #666;
  }
`;

const DropDown = styled.ul`
  position: absolute;
  left: 2rem;
  width: calc(100vw - 6rem);
  background-color: #fff;
  padding: 1rem;
  border: 1px solid #999;
`;

function NavItem(props) {
  let [vis, setVis] = useState(false);

  useEffect(() => {
    console.log(menuData[props.link]);
  });

  const menuController = event => {
    event.preventDefault();
    console.log('props.link');
  };

  return (
    <li
      onMouseEnter={() => setVis((vis = !vis))}
      onMouseLeave={() => setVis((vis = !vis))}
    >
      <NavLink onClick={() => menuController}>{props.link}</NavLink>
      <DropDown hidden={vis ? '' : 'hidden'}>
        {menuData[props.link].map(key => (
          <SubMenu key={key} link={key} />
        ))}
      </DropDown>
    </li>
  );
}

export default NavItem;
