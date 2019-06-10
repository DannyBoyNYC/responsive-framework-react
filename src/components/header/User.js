import React from 'react';

import { UserContainer, UserLink } from './styles';

function User() {
  return (
    <UserContainer>
      <UserLink href="#User">
        John Doe
        <svg viewBox="0 0 32 32">
          <polygon
            id="Triangle"
            transform="translate(15, 16) rotate(-180) translate(-15, -16) "
            points="15.5 9 27 24 4 24"
          />
        </svg>
      </UserLink>
    </UserContainer>
  );
}

export default User;
