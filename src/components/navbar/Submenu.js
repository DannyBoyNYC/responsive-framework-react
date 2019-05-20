import React from 'react';

import Item from './Item';

function SubmenuItem(props) {
  return (
    <li>
      <span>
        {props.subSec}
      </span>
      <ul>
        {Object.entries(props.links).map(([key, value]) =>
          <Item key={key} links={value} />,
        )}
      </ul>
    </li>
  );
}

export default SubmenuItem;
