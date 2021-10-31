import React from 'react';

// style
import styled from 'styled-components';

// context
import { useThemeContext } from 'context/useThemeContext/mod.tsx';

const StyledThemeButton = styled.button`
  position: fixed;
  bottom: 19px;
  right: 78px;
  width: 130px;
  height: 40px;
  border: 0;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.bg_themeBtn};
  color: ${({ theme }) => theme.themeBtnWord};
  font-size: 12px;
  box-shadow: 0px 3px 4px 0 rgba(0 0 0 / 12%);
  cursor: pointer;

  :before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '${({ theme }) => theme.themeContent}';
    color: ${({ theme }) => theme.themeBtnImg};
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-right: 5px;
  }

  :hover {
    background-color: ${({ theme }) => theme.bg_themeBtnHover};
    color: ${({ theme }) => theme.themeBtnWordHover};
  }
  :hover:before {
    color: ${({ theme }) => theme.themeBtnImgHover};
  }
`;

const ThemeToggleButton = () => {
  const { setTheme, theme } = useThemeContext();
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return <StyledThemeButton onClick={themeToggler}>{theme === 'light' ? '다크 모드로' : '라이트 모드로'}</StyledThemeButton>;
};

export default ThemeToggleButton;
