import React from 'react';
import styled from 'styled-components';

const duh = styled.div``;

function Utilities() {
  return (
    <ul className="utilities">
      <li>
        <a className="search" href="#0">
          <span className="util-icon" />
          <span className="util-title">Search</span>
        </a>
      </li>
      <li>
        <a className="watchlist" href="#0">
          <span className="util-icon" />
          <span className="util-title">Watchlist</span>
        </a>
      </li>
      <li>
        <a className="briefcase" href="#0">
          <span className="util-icon" />
          <span className="util-title">Briefcase</span>
        </a>
      </li>
      <li>
        <a className="connect" href="#0">
          <span className="util-icon" />
          <span className="util-title">Connect</span>
        </a>
      </li>
    </ul>
  );
}

export default Utilities;
