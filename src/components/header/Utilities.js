import React from 'react';
import User from './User';

import { UtilityContainerUl, UtilityListItem } from './styles';

const utilities = ['search', 'watchlist', 'briefcase', 'connect'];

function Utilities() {
  return (
    <UtilityContainerUl className="utilities">
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
    </UtilityContainerUl>
  );
}

export default Utilities;
