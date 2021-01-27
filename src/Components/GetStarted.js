import React from 'react';
import styled from 'styled-components';

/**
 * Rendered JSX
 */
const GetStarted = ({
  forValue,
  inputName,
  nameValue,
  idValue,
  handleChange,
  value,
}) => {
  return (
    <StyledSection>
      <StyledLabel htmlFor={forValue}>{inputName}</StyledLabel>
      <StyledInput
        name={nameValue}
        id={idValue}
        type="text"
        placeholder={inputName}
        onChange={handleChange}
        value={value}
        required
      />
    </StyledSection>
  );
};

/**
 * Styled Components
 */

const StyledSection = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.2em;
`;

const StyledInput = styled.input`
  font-family: inherit;
  width: 10em;
  border: 0;
  border-bottom: 1px solid #f5f6fa;
  outline: 0;
  font-size: 1.1em;
  color: #f5f6fa;
  padding: 7px 0;
  background: transparent;
  text-align: center;
  padding-bottom: 0;
`;

const StyledLabel = styled.label`
  font-size: 1.2em;
`;

/**
 * Export
 */
export default GetStarted;
