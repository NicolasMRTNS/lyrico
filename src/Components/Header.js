import React from 'react';
import styled from 'styled-components';

/**
 * Rendered JSX
 */
const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>Parola</StyledH1>
      <StyledH2>Lyrics for your favorite songs</StyledH2>
    </StyledHeader>
  );
};

/**
 * Styled Components
 */
const StyledHeader = styled.header`
  text-align: center;
  border-bottom: 2px solid #f5f6fa;
`;
const StyledH1 = styled.h1`
  margin-bottom: 0;
  margin-top: 0.2em;
  font-weight: 500;
  font-family: 'Chakra Petch', sans-serif;
`;
const StyledH2 = styled.h2`
  margin-top: 0;
  margin-bottom: 0.2em;
  font-weight: 500;
  font-size: 1.2em;
`;

/**
 * Export
 */
export default Header;
