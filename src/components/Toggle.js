import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;
const Toggle = ({theme,  onSwitchTheme }) => {
    console.log(theme);
    return (
        <Button onClick={onSwitchTheme} >
          Switch Theme
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    onSwitchTheme: func.isRequired,
}
export default Toggle;
