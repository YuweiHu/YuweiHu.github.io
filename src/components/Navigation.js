import React from 'react';
import styled from 'styled-components';
import browserHistory from '../history';
import { theme } from '../styles';

const Nav = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 100%;
  color: ${theme.text};
  background-color: transparent;
  border: none;
  outline: none;
  font-family: Papyrus;
`;

const Navigation = () => (
  <Nav>
    {['Home', 'Project', 'About', 'Article'].map((nav) => (
      <StyledButton
        onClick={() => browserHistory.push(`/${nav.toLowerCase()}`)}
      >
        {nav}
      </StyledButton>
    ))}
  </Nav>
);

export default Navigation;
