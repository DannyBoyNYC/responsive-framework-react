// the navbar components and their drop downs
import React from 'react';

// import { NavLinkLi, NavlinkA, DropdownUl } from './styles';

const sectionStyles = {
  color: '#fff',
};

const ulStyles = {
  display: 'none',
};

function SideNavItem(props) {
  return (
    <div>
      <ul>
        <li className={'getFromProps'} style={sectionStyles}>
          {props.section}
          <ul style={ulStyles}>
            {Object.keys(props.subsections).map((subSec, key) => (
              <li key={key}>{props.subsections[subSec]}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default SideNavItem;
