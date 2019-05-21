import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const MenuHeaderSpan = styled.span`
  display: inline-block;
  padding-bottom: 0.5rem;
`;

function SubmenuItem(props) {
  return (
    <li>
      <MenuHeaderSpan>
        {props.subSec}
      </MenuHeaderSpan>
      <ul>
        {Object.entries(props.links).map(([key, value]) =>
          <Item key={key} link={value} />,
        )}
      </ul>
    </li>
  );
}

export default SubmenuItem;
