// the navbar components and their drop downs
import React, { useState } from 'react';

import styled from 'styled-components';

import { Flexul } from '../styles';

const FlyHeadA = styled.a`
  display: inline-block;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem;
`;

const FlySubSpan = styled.span`
  color: #eee;
`;

function SideNavItem(props) {
  let [vis, setVis] = useState(false);

  return (
    <ul>
      <li>
        <FlyHeadA
          href="#00"
          onMouseEnter={() => setVis((vis = !vis))}
          onMouseLeave={() => setVis((vis = !vis))}
        >
          {props.section}
        </FlyHeadA>
        <Flexul className={vis ? '' : 'hidden'}>
          {Object.keys(props.subsections).map((subSec, key) => (
            <NewItem key={key} subSections={subSec} data={props.subsections} />
          ))}
        </Flexul>
      </li>
    </ul>
  );
}

function NewItem(props) {
  return (
    <li>
      <FlySubSpan>{props.subSections}</FlySubSpan>
      <ul>
        {Object.entries(props.data[props.subSections]).map(([key, value]) => (
          <li key={key}>
            <a style={{ color: '#bbb' }} href="{value}">
              {value}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default SideNavItem;
