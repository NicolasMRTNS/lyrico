import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>Lyrico</StyledH1>
      <StyledH2>Get the lyrics for your favorite songs</StyledH2>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  text-align: center;
  border-bottom: 2px solid #fff;
`;
const StyledH1 = styled.h1`
  margin-bottom: 0;
  margin-top: 0.2em;
  font-weight: 500;
`;
const StyledH2 = styled.h2`
  margin-top: 0;
  margin-bottom: 0.2em;
  font-weight: 500;
  font-size: 1.2em;
`;
export default Header;
