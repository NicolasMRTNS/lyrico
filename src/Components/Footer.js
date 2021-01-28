import React from 'react';
import styled from 'styled-components';

/**
 * Rendered JSX
 */
const Footer = () => {
  return (
    <StyledFooter>
      <StyledParagraph>
        Made by{' '}
        <StyledLink
          href="https://github.com/NicolasMRTNS"
          target="_blank"
          rel="noreferrer"
        >
          Nicolas Martins
        </StyledLink>
        <br />
        Special thanks to{' '}
        <StyledLink
          href="https://lyricsovh.docs.apiary.io/#"
          target="_blank"
          rel="norefferer"
        >
          lyrics.ovh
        </StyledLink>{' '}
        for the API
      </StyledParagraph>
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
  padding: 0 5px;
`;
const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
`;
const StyledLink = styled.a`
  color: #00a8ff;
`;

/**
 * Export
 */
export default Footer;
