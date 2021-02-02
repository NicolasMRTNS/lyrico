import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Rendered JSX
 */
const SearchButton = ({ handleClick }) => {
  return (
    <StyledDiv>
      <StyledButton type="button" onClick={handleClick}>
        Search
      </StyledButton>
    </StyledDiv>
  );
};

/**
 * Styled Components
 */
const StyledDiv = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
  font-size: 1.2em;
  margin-top: 1em;
  font-family: inherit;
  background: #89d7ff;
  color: #171f24;
  border: 0;
  border-radius: 0.5em;
  padding: 0.5em;
  outline: 0;
`;

/**
 * PropTypes
 */
SearchButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default SearchButton;
