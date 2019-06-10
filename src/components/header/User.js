import React from 'react';

import { UserContainer, UserLink } from './styles';

function User() {
  return (
    <UserContainer>
      <UserLink href="#User">
        John Doe
        <svg viewBox="0 0 32 32">
          <g id="caret-down">
            <polygon
              id="Triangle"
              transform="translate(15.500000, 16.500000) rotate(-180.000000) translate(-15.500000, -16.500000) "
              points="15.5 9 27 24 4 24"
            />
          </g>
        </svg>
      </UserLink>
    </UserContainer>
  );
}

export default User;
