import React from 'react';

// style
import styled from 'styled-components';

// components
import ThemeToggleButton from './ThemeToggleButton/mod.tsx';

const StyledContents = styled.div`
  width: 1130px;
  padding: 20px 30px;
  margin: 0 auto;
`;

const HomePageContainer = () => {
  return (
    <StyledContents>
      <ThemeToggleButton />
    </StyledContents>
  );
};

export default HomePageContainer;
