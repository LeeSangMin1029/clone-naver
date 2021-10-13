import styled from 'styled-components';
import Logo from './Logo.js';
import SearchForm from './SearchForm.js';
import Service from './Service.js';

const BackGround = styled.div`
  width: 100%;
  height: 160px;
  background-color: #fff;
  border-bottom: 1px solid #e4e8eb;
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
          <SearchForm />
          <Service />
        </Contents>
      </WrapContents>
    </BackGround>
  );
};
export default Header;
