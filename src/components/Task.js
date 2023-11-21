import React from 'react';
import { styled } from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const StyledTaskContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const Task = ({ idx, title, value, handleRemove }) => {
  return (
    <StyledTaskContainer>
      <Button variant="text" onClick={() => handleRemove(idx)}>
        Remove
      </Button>
      <StyledTextField
        id="outlined-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        minRows={5}
      />
    </StyledTaskContainer>
  );
};

export { Task };
