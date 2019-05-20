// loading react and hooks
import React, { useState, useEffect } from 'react';
import SubMenu from './Submenu';
// styled components
import styled from 'styled-components';

const NavlinkA = styled.a`
  cursor: pointer;
  display: inline-block;
  color: #fff;
  padding: 14px 10px;
  white-space: nowrap;
  // font-size: 15px;
  &:hover {
    // text-decoration: underline;
    // font-weight: bold;
  }
`;

const DropdownUl = styled.ul`
  position: absolute;
  background-color: #fff;
  padding: 1rem;
  border: 1px solid #999;
  display: flex;
  flex-direction: row;
  // column-count: 3;
  // column-gap: 20px;
  // column-width: 120px;
  &.hidden {
    display: none;
  }
`;

function NavItem(props) {
  let [vis, setVis] = useState(false);

  useEffect(() => {
    console.log(props.section);
  });

  const menuController = event => {
    event.preventDefault();
    console.log('props.section');
  };

  return (
    <li
      onMouseEnter={() => setVis((vis = !vis))}
      onMouseLeave={() => setVis((vis = !vis))}
    >
      <NavlinkA onClick={() => menuController}>
        {props.section}
      </NavlinkA>
      <DropdownUl className={vis ? '' : 'hidden'}>
        {Object.keys(props.subsections).map((subSec, key) =>
          <SubMenu
            key={key}
            subSec={subSec}
            links={props.subsections[subSec]}
          />,
        )}
      </DropdownUl>
    </li>
  );
}

export default NavItem;
