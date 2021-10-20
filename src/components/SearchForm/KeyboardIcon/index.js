// style
import styled from 'styled-components';

// svg
import { ReactComponent as KeyboardImage } from './keyboard.svg';

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

const KeyboardIcon = () => {
  return (
    <KeyboardStyle>
      <KeyboardImage fill="#CCD1D1" width="25px" height="15px" />
    </KeyboardStyle>
  );
};

export default KeyboardIcon;
