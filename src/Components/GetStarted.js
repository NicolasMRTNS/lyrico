import React from 'react';
import styled from 'styled-components';

const GetStarted = ({ inputName }) => {
  return (
    <StyledSection>
      <StyledLabel for="artistName">{inputName}</StyledLabel>
      <StyledInput
        name="artistName"
        id="artistName"
        type="text"
        placeholder={inputName}
        required
      />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  font-family: inherit;
  width: 50%;
  border: 0;
  border-bottom: 1px solid #f5f6fa;
  outline: 0;
  font-size: 1.1em;
  color: #f5f6fa;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  text-align: center;
  padding-bottom: 0;
`;

const StyledLabel = styled.label`
  font-size: 1.2em;
`;

export default GetStarted;
