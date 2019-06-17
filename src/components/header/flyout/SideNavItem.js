// the navbar components and their drop downs
import React, { useState } from 'react';

import { FlexUl, FlyHeadA, FlySubSpan } from '../styles';

function SideNavItem(props) {
  let [vis, setVis] = useState(false);

  return (
    <ul>
      <li>
        <FlyHeadA href="#00" onClick={() => setVis((vis = !vis))}>
          {props.section}
        </FlyHeadA>
        <FlexUl className={vis ? '' : 'hidden'}>
          {Object.keys(props.subsections).map((subSec, key) => (
            <NewItem key={key} subSections={subSec} data={props.subsections} />
          ))}
        </FlexUl>
      </li>
    </ul>
  );
}

function NewItem(props) {
  return (
    <li style={{ flex: 1 }}>
      <FlySubSpan>{props.subSections}</FlySubSpan>
      <ul>
        {Object.entries(props.data[props.subSections]).map(([key, value]) => (
          <li key={key} style={{ paddingBottom: '0.25' + 'rem' }}>
            <a style={{ color: '#333' }} href="{value}">
              {value}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default SideNavItem;
