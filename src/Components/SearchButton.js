import React from 'react';
import styled from 'styled-components';

const SearchButton = ({ handleClick }) => {
  return (
    <StyledDiv>
      <StyledButton type="button" onClick={handleClick}>
        Search
      </StyledButton>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
  font-size: 1.2em;
  margin-top: 1em;
  font-family: inherit;
  background: inherit;
  color: inherit;
  border-radius: 0.5em;
  padding: 0.5em;
  outline: 0;
`;

export default SearchButton;
