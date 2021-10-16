import styled from 'styled-components';

const ATCSidebar = styled.div`
  position: relative;
  right: 2px;
`;

const Menu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  position: absolute;
  z-index: 100;
  width: 600px;
  height: 40px;
  top: 26px;
  border-radius: 0 0 5px 5px;
  border: 1px solid ${({ theme }) => theme.borderBottom};
  background-color: ${({ theme }) => theme.toolbarBackground};
  a:hover {
    text-decoration: underline;
  }
  box-shadow: 0px 2px 3px 1px ${({ theme }) => theme.toolbarShadow};
`;

const UserTool = styled.div`
  padding-left: 10px;
  // 도움말 링크
  span:nth-child(1) a {
    color: ${({ theme }) => theme.toolbar};
  }
  // 신고 링크
  span:nth-child(2) a {
    padding-left: 10px;
    color: #03c75a;
  }
`;

const ACTOffMenu = styled.div`
  padding-right: 10px;
  // 자동완성 끄기 링크
  a {
    color: ${({ theme }) => theme.toolbar};
  }
`;

const CustomLink = ({ href, string }) => {
  return (
    <span>
      <a href={href}>{string}</a>
    </span>
  );
};

const Toolbar = ({ isOpen }) => {
  return (
    <ATCSidebar id="tool">
      <Menu isOpen={isOpen}>
        <UserTool>
          <CustomLink href="https://help.naver.com/support/service/main.help?serviceNo=605&categoryNo=1987" string="도움말" />
          <CustomLink href="https://help.naver.com/support/contents/contents.help?serviceNo=605&categoryNo=18215" string="신고" />
        </UserTool>
        {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <ACTOffMenu>
          <CustomLink href="#" string="자동완성 끄기" />
        </ACTOffMenu>
      </Menu>
    </ATCSidebar>
  );
};

export default Toolbar;
