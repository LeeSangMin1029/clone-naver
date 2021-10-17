import styled from 'styled-components';

const StyledListItem = styled.li`
  list-style: none;
  margin-left: 10px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: ${({ theme }) => theme.menuWordColor};
  &.color {
    color: #19ce60;
  }
`;

const MenuItem = ({ children, href, className }) => {
  return (
    <StyledListItem>
      <StyledLink href={href} className={className}>
        {children}
      </StyledLink>
    </StyledListItem>
  );
};

export default MenuItem;
