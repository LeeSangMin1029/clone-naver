import React from 'react';

// style
import styled from 'styled-components';
import { fontFamilyStyle } from 'utils/mod.ts';

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
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.word};
  font-size: 12px;
  box-shadow: 0px 3px 4px 0 rgba(0 0 0 / 12%);
  cursor: pointer;

  :before {
    ${fontFamilyStyle};
    content: '${({ theme }) => theme.themeContent}';
    color: ${({ theme }) => theme.colors.word};
    margin-right: 5px;
  }

  :hover {
    background-color: #404040;
    color: #fff;
  }
  :hover:before {
    color: ${({ theme }) => theme.colors.button};
  }
`;

const ThemeToggleButton = () => {
  const { setTheme, theme } = useThemeContext();
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <StyledThemeButton onClick={themeToggler}>
      {theme === 'light' ? '다크 모드로' : '라이트 모드로'}
    </StyledThemeButton>
  );
};

export default ThemeToggleButton;
