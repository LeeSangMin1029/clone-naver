import styled from 'styled-components';
import { ReactComponent as DownArrow } from '../svg/arrow-down.svg';

const ArrowStyle = styled.div`
  margin-right: 12px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ExpandArrow = () => {
  return (
    <ArrowStyle>
      <DownArrow width="12px" height="12px" fill="#19ce60" />
    </ArrowStyle>
  );
};

export default ExpandArrow;
