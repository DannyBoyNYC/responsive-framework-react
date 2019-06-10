import React from 'react';
import User from './User';

import { UtilityContainer, UtilityListItem } from './styles';

const utilities = ['search', 'watchlist', 'briefcase', 'connect'];

function Utilities() {
  return (
    <UtilityContainer>
      {utilities.map(util => (
        <UtilityListItem key={util}>
          <a className={util} href="#0">
            <span className="util-icon" />
            <span className="util-title">
              {util.charAt(0).toUpperCase() + util.slice(1)}
            </span>
          </a>
        </UtilityListItem>
      ))}
      <User />
    </UtilityContainer>
  );
}

export default Utilities;
