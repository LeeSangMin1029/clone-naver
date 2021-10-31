import React from 'react';
// style
import styled from 'styled-components';

const Link = styled.a`
  user-select: none;
  margin: 20px;
`;

const Logo = () => {
  return (
    <Link href="/">
      <img alt="logo" src="/public/img/logo_green.png" width={165} height={32} />
    </Link>
  );
};
export default Logo;
