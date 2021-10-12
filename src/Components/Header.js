import styled from 'styled-components';
import Logo from './Logo.js';

const BackGround = styled.div`
  width: 100%;
  background-color: #fff;
  height: 160px;
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
`;

const Header = () => {
  return (
    <BackGround>
      <WrapContents>
        <Contents>
          <Logo />
        </Contents>
      </WrapContents>
    </BackGround>
  );
};
export default Header;
