import React from 'react';
// style
import styled from 'styled-components';

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

const ToggleButton = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: React.ChangeEventHandler<HTMLInputElement> }) => {
  return (
    <ArrowStyle>
      <EmptyInput type="checkbox" id="menu-button" onChange={toggleMenu} checked={isOpen} />
      <EmptyLabel htmlFor="menu-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          xmlSpace="preserve"
          viewBox="96 160 320 191.9"
          width="10px"
          height="100%"
          fill="#19ce60"
          id="arrow-icon"
        >
          <path
            d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  
          c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"
          />
        </svg>
      </EmptyLabel>
    </ArrowStyle>
  );
};

export default ToggleButton;
