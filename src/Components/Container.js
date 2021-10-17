import styled from 'styled-components';
import ToggleThemeButton from './ToggleThemeButton.js';

const StyledContents = styled.div`
  width: 1130px;
  padding: 20px 30px;
  margin: 0 auto;
`;

const Container = () => {
  return (
    <StyledContents>
      <ToggleThemeButton />
    </StyledContents>
  );
};

export default Container;
