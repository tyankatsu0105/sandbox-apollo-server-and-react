import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import styled from 'styled-components';

import * as RoutesEntity from '~client/app/application/businesses/routes/entity';

// ------------------------------------
// Helpers
// ------------------------------------
const activeClassName = 'is-active' as const;

// ------------------------------------
// Component
// ------------------------------------

export const Component = () => (
  <StyledHeader>
    <nav>
      <StyledNavList>
        <StyledNavListItem>
          <StyledNavListItemLink
            exact
            activeClassName={activeClassName}
            to={RoutesEntity.URI.home}
          >
            home
          </StyledNavListItemLink>
        </StyledNavListItem>
        <StyledNavListItem>
          <StyledNavListItemLink
            activeClassName={activeClassName}
            to={RoutesEntity.URI.users}
          >
            users
          </StyledNavListItemLink>
        </StyledNavListItem>
      </StyledNavList>
    </nav>
  </StyledHeader>
);

// ------------------------------------
// Styles
// ------------------------------------

const StyledHeader = styled.header`
  padding: 12px;
  background-color: #ccc;
`;

const StyledNavList = styled.ul`
  display: flex;
`;

const StyledNavListItem = styled.li`
  & + & {
    margin-left: 12px;
  }
`;

const StyledNavListItemLink = styled(ReactRouterDOM.NavLink)`
  text-decoration: none;
  &.${activeClassName} {
    text-decoration: underline;
  }
`;
