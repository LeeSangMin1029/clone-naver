// style
import React from 'react';
import styled from 'styled-components';

// components
import Logo from './Logo/mod.tsx';
import SearchForm from 'components/SearchForm/mod.tsx';
import ExternalServiceArea from 'components/MainHeader/ExternalServiceArea/mod.tsx';
import HeaderMenu from './HeaderMenu/mod.tsx';

// context
import { MenuProvider } from 'context/useMenuContext/mod.tsx';

const StyledHeader = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
`;

const WrapperTopHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.borderBottom};
`;

const StyledTopHeader = styled.div`
  width: 1190px;
  height: 160px;
  margin: 0 auto;
  padding: 0 30px;
`;

const Contents = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainHeader = () => {
  return (
    <StyledHeader>
      <WrapperTopHeader>
        <StyledTopHeader>
          <Contents>
            <Logo />
            <MenuProvider>
              <SearchForm />
            </MenuProvider>
            <ExternalServiceArea />
          </Contents>
        </StyledTopHeader>
      </WrapperTopHeader>
      <HeaderMenu />
    </StyledHeader>
  );
};

export default MainHeader;
