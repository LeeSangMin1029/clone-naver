import styled from 'styled-components';
import Logo from './Logo.js';
import SearchForm from './SearchForm.js';
import Service from './Service.js';
import { MenuProvider } from './Context/useMenuContext.js';
import HeaderMenu from './HeaderMenu.js';

const StyledHeader = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.header};
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

const Header = () => {
  return (
    <StyledHeader>
      <WrapperTopHeader>
        <StyledTopHeader>
          <Contents>
            <Logo />
            <MenuProvider>
              <SearchForm />
            </MenuProvider>
            <Service />
          </Contents>
        </StyledTopHeader>
      </WrapperTopHeader>
      <HeaderMenu />
    </StyledHeader>
  );
};

export default Header;
