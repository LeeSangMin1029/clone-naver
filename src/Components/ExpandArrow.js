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

const EmptyLabel = styled.label`
  display: contents;
`;

const ExpandArrow = ({ isOpen, toggleMenu }) => {
  return (
    <ArrowStyle>
      <EmptyInput type="checkbox" id="menu-button" onChange={toggleMenu} checked={isOpen} />
      <EmptyLabel htmlFor="menu-button">
        <DownArrow width="10px" height="100%" fill="#19ce60" id="arrow-icon" />
      </EmptyLabel>
    </ArrowStyle>
  );
};

export default ExpandArrow;
