import React from 'react';

import Item from './Item';

function SubmenuItem(props) {
  // const links = props.links;

  return (
    <li>
      <span>
        {props.subSec}
      </span>
      <ul>
        {console.log('Links', props.links.Home)}

        {Object.keys(props.links).map(
          key => console.log(key),
          // props.links.key.map(key => <Item key={key} link={key} />),
        )}

        {props.links.Internal.map((key, index) =>
          <Item key={index} link={key} />,
        )}
      </ul>
    </li>
  );
  // )

  // )
}

export default SubmenuItem;
