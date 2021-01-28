import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  border-bottom: 2px solid #f5f6fa;
  outline: 0;
  font-size: 1.1em;
  color: #f5f6fa;
  border-radius: 0.3em;
  background: transparent;
  text-align: center;
  padding: 0;
`;

const StyledLabel = styled.label`
  font-size: 1.2em;
  font-weight: 500;
`;

/**
 * Prop Types
 */
GetStarted.propTypes = {
  forValue: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  idValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default GetStarted;
