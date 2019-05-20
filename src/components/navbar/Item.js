import React from 'react';

function SubmenuItem(props) {
  return (
    <li>
      <a href={props.link}>
        {props.link}
      </a>
    </li>
  );
}

export default SubmenuItem;
