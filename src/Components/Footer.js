import React from 'react';
import styled from 'styled-components';

/**
 * Rendered JSX
 */
const Footer = () => {
  return (
    <StyledFooter>
      Made by{' '}
      <StyledLink
        href="https://github.com/NicolasMRTNS"
        target="_blank"
        rel="noreferrer"
      >
        Nicolas Martins
      </StyledLink>
    </StyledFooter>
  );
};

/**
 * Styled Components
 */
const StyledFooter = styled.footer`
  margin-top: 1.2em;
  text-align: center;
  border-top: 2px solid #f5f6fa;
`;

const StyledLink = styled.a`
  color: inherit;
`;

/**
 * Export
 */
export default Footer;
