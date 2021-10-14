import styled from 'styled-components';
import { ReactComponent as DownArrow } from '../svg/arrow-down.svg';

const EmptyInput = styled.input`
  display: none;

  :checked + label > svg {
    transition: 0.3s;
    transform: rotate(180deg);
  }
  + label > svg {
    transition: 0.3s;
    transform: rotate(0deg);
  }
`;

const ArrowStyle = styled.div`
  margin-right: 12px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  label {
    cursor: pointer;
  }
`;

const ExpandArrow = () => {
  return (
    <ArrowStyle>
      <EmptyInput type="checkbox" id="menu-button" />
      <label htmlFor="menu-button">
        <DownArrow width="12px" height="12px" fill="#19ce60" />
      </label>
    </ArrowStyle>
  );
};

export default ExpandArrow;
