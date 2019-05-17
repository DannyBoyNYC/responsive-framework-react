import React from 'react';
import styled from 'styled-components';

const utilities = ['search', 'watchlist', 'briefcase', 'connect'];

const UtilityContainer = styled.ul`
  display: flex;
  white-space: nowrap;
  padding: 0.5rem;
  padding-right: 2rem;
`;
const UtilityListItem = styled.li`margin-left: 1rem;`;

function Utilities() {
  return (
    <UtilityContainer>
      {utilities.map(util =>
        <UtilityListItem key={util}>
          <a className={util} href="#0">
            <span className="util-icon" />
            <span className="util-title">
              {util.charAt(0).toUpperCase() + util.slice(1)}
            </span>
          </a>
        </UtilityListItem>,
      )}
    </UtilityContainer>
  );
}

export default Utilities;
