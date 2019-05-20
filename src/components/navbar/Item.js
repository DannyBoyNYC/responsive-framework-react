import React from 'react';

function SubmenuItem(props) {
  return (
    <li>
      <a href={props.links}>
        {props.links}
      </a>
    </li>
  );
}

export default SubmenuItem;
