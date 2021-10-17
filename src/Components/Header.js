import styled from 'styled-components';
import Logo from './Logo.js';
import SearchForm from './SearchForm.js';
import Service from './Service.js';
import { MenuProvider } from './Context/useMenuContext.js';

const BackGround = styled.div`
  width: 100%;
  height: 161px;
  background-color: ${({ theme }) => theme.header};
  border-bottom: 1px solid ${({ theme }) => theme.borderBottom};
`;

const WrapContents = styled.div`
  width: 1130px;
  height: 100%;
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
    <BackGround>
      <WrapContents>
        <Contents>
          <Logo />
          <MenuProvider>
            <SearchForm />
          </MenuProvider>
          <Service />
        </Contents>
      </WrapContents>
    </BackGround>
  );
};
export default Header;
