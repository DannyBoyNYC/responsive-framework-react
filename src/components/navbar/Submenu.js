import React from 'react';
import styled from 'styled-components';

import Item from './Item';
const MenuitemsLi = styled.li`
  padding-right: 1.5rem;
  // flex-basis: 120px;
`;
const MenuHeaderSpan = styled.span`
  display: inline-block;
  padding-bottom: 0.5rem;
`;

function SubmenuItem(props) {
  return (
    <MenuitemsLi>
      <MenuHeaderSpan>
        {props.subSec}
      </MenuHeaderSpan>
      <ul>
        {Object.entries(props.links).map(([key, value]) =>
          <Item key={key} link={value} />,
        )}
      </ul>
    </MenuitemsLi>
  );
}

export default SubmenuItem;
