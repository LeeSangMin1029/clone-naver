import React, { useState, useCallback } from 'react';
// style
import styled from 'styled-components';
import { fontFamilyStyle } from 'utils/mod.ts';

type ButtonProps = {
  view: boolean;
};

const StyledButton = styled.a<ButtonProps>`
  margin-left: 10px;
  font-size: 13px;
  background-color: transparent;
  color: ${({ theme, view }) => (view ? theme.green : theme.colors.word)};
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  :after {
    ${fontFamilyStyle}
    content: '\f107';
    padding-left: 5px;
    padding-top: 2px;
    transform: rotate(${(props) => (props.view ? '180deg' : '0deg')});
    width: 10px;
  }
`;

const SeeMoreButton = () => {
  const [view, setView] = useState(false);
  const handleView = useCallback(() => {
    setView(!view);
  }, [view]);
  return (
    <StyledButton onClick={handleView} view={view}>
      {view ? '접기' : '더보기'}
    </StyledButton>
  );
};

export default SeeMoreButton;
