// each section in the drop down
import React from 'react';

import Item from './Item';

import { MenuitemsLi, MenuHeaderSpan } from './styles';

function SubmenuItem(props) {
  return (
    <MenuitemsLi>
      <MenuHeaderSpan>{props.subSec}</MenuHeaderSpan>
      <ul>
        {Object.entries(props.links).map(([key, value]) => (
          <Item key={key} link={value} />
        ))}
      </ul>
    </MenuitemsLi>
  );
}

export default SubmenuItem;
