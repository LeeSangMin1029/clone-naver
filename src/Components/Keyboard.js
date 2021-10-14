import styled from 'styled-components';
import { ReactComponent as KeyboardImage } from '../svg/keyboard.svg';

const KeyboardStyle = styled.div`
  margin-right: 12px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover > svg {
    fill: #b2babb;
  }
`;

const Keyboard = () => {
  return (
    <KeyboardStyle>
      <KeyboardImage fill="#CCD1D1" width="25px" height="15px" />
    </KeyboardStyle>
  );
};

export default Keyboard;
