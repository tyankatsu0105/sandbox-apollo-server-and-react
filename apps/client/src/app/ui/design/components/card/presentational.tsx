import * as React from 'react';
import styled from 'styled-components';

// ------------------------------------
// Component
// ------------------------------------

export const Component: React.FC = (props) => (
  <StyledWrap>{props.children}</StyledWrap>
);

// ------------------------------------
// Styles
// ------------------------------------

const StyledWrap = styled.div`
  box-shadow: 0 0 6px #ccc;
`;
