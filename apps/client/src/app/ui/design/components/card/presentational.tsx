import * as React from 'react';
import styled from 'styled-components';

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  body?: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
};

// ------------------------------------
// Component
// ------------------------------------

export const Component = (props: Props) => (
  <StyledWrap>
    {props.header && <StyledHeader>{props.header}</StyledHeader>}
    {props.body && <StyledBody>{props.body}</StyledBody>}
    {props.footer && <StyledFooter>{props.footer}</StyledFooter>}
  </StyledWrap>
);

// ------------------------------------
// Styles
// ------------------------------------

const StyledWrap = styled.div`
  box-shadow: 0 0 6px #ccc;
`;

const StyledHeader = styled.div`
  padding: 12px;
  border-bottom: 1px solid #000;
`;

const StyledBody = styled.div`
  padding: 12px;
`;

const StyledFooter = styled.div`
  padding: 12px;
`;
