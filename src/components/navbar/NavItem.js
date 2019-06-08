// loading react and hooks
import React, { useState, useEffect } from 'react';
import SubMenu from './Submenu';
// styled components
import { NavLinkLi, NavlinkA, DropdownUl } from './styles';

function NavItem(props) {
  let [vis, setVis] = useState(false);

  useEffect(() => {
    // console.log(props.section);
  });

  const menuController = event => {
    console.log(event);
    event.preventDefault();
    console.log('props.section');
  };

  return (
    <NavLinkLi
      className={`t-${props.section.replace(' ', '').toLowerCase()} 
      ${vis ? 'active' : ''}`}
      onMouseEnter={() => setVis((vis = !vis))}
      onMouseLeave={() => setVis((vis = !vis))}
    >
      <NavlinkA onClick={() => menuController}>{props.section}</NavlinkA>
      <DropdownUl className={vis ? '' : 'hidden'}>
        {Object.keys(props.subsections).map((subSec, key) => (
          <SubMenu
            key={key}
            subSec={subSec}
            links={props.subsections[subSec]}
          />
        ))}
      </DropdownUl>
    </NavLinkLi>
  );
}

export default NavItem;
