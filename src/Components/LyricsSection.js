import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Rendered JSX
 */
const LyricsSection = ({ songLyrics }) => {
  return <StyledSection>{songLyrics}</StyledSection>;
};

/**
 * Styled Components
 */
const StyledSection = styled.section`
  text-align: center;
  margin: 1.2em 0;
`;

/**
 * PropTypes
 */
LyricsSection.propTypes = {
  songLyrics: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default LyricsSection;
