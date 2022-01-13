import React from 'react';
// style
import styled from 'styled-components';
import { fontFamilyStyle } from 'utils/mod.ts';

const StyledListItem = styled.li`
  list-style: none;
  margin-left: 10px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.word};
  &.color {
    color: ${({ theme }) => theme.green};
  }
  &.mail:before {
    ${fontFamilyStyle}
    content: '\f658';
    margin-right: 5px;
  }

  &.live:after {
    ${fontFamilyStyle}
    content: '\f550';
    margin-left: 5px;
  }
  &.tv:before {
    ${fontFamilyStyle}
    content: '\f04b';
    margin-right: 5px;
  }
`;

const HeaderMenuItem = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className: string;
}) => {
  return (
    <StyledListItem>
      <StyledLink href={href} className={className}>
        {children}
      </StyledLink>
    </StyledListItem>
  );
};

export default HeaderMenuItem;
