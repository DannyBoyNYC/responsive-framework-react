import React, { useState, useEffect } from 'react';

import { NavLinkLi, DropdownUl, NavlinkA } from './styles';

function More(props) {
  let [vis, setVis] = useState(false);
  let [section, setSection] = useState(false);

  useEffect(() => {
    console.log(section);
    var test = document.querySelector('t-home');
    console.log(test);
  });

  return (
    <NavLinkLi
      // ${vis ? 'active' : ''}`}
      onMouseEnter={() => setVis((vis = !vis))}
      onMouseLeave={() => setVis((vis = !vis))}
    >
      <NavlinkA onClick={() => setSection((section = !section))}>
        More &raquo;
      </NavlinkA>

      <DropdownUl className={vis ? '' : 'hidden'}>
        {section ? 'true' : 'false'}
      </DropdownUl>
    </NavLinkLi>
  );
}

export default More;
