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
          title="GitHub Link"
          target="_blank"
          rel="noreferrer noopener"
        >
          Nicolas Martins
        </StyledLink>
        <br />
        Special thanks to{' '}
        <StyledLink
          href="https://lyricsovh.docs.apiary.io/#"
          title="API Link"
          target="_blank"
          rel="norefferer noopener"
        >
          lyrics.ovh
        </StyledLink>{' '}
        for the API.
        <br />
        Logo made by{' '}
        <StyledLink
          href="https://www.freepik.com"
          title="Freepik"
          target="_blank"
          rel="norefferer noopener"
        >
          Freepik
        </StyledLink>{' '}
        from{' '}
        <StyledLink
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="norefferer noopener"
        >
          flaticon.com
        </StyledLink>
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
  color: #89d7ff;
`;

/**
 * Export
 */
export default Footer;
