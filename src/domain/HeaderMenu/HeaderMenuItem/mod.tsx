import React from 'react';
// style
import styled from 'styled-components';

const StyledListItem = styled.li`
  list-style: none;
  margin-left: 10px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.menuWordColor};
  &.color {
    color: #19ce60;
  }
  &.mail:before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f658';
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-right: 5px;
  }

  &.live:after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f550';
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-left: 5px;
  }
  &.tv:before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f04b';
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-right: 5px;
  }
`;

const HeaderMenuItem = ({ children, href, className }: { children: React.ReactNode; href: string; className: string }) => {
  return (
    <StyledListItem>
      <StyledLink href={href} className={className}>
        {children}
      </StyledLink>
    </StyledListItem>
  );
};

export default HeaderMenuItem;
