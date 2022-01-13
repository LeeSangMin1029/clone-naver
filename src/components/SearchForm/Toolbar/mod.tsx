// react function
import React, { useRef } from 'react';

// styled
import styled from 'styled-components';

// react custom hooks
import useOutsideAlerter from 'hooks/useOutsideAlerter/mod.tsx';

interface IMenu {
  isOpen: boolean;
}

const ATCSidebar = styled.div`
  position: relative;
  right: 2px;
`;

const Menu = styled.div<IMenu>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  position: absolute;
  z-index: 100;
  width: 620px;
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
    color: ${({ theme }) => theme.colors.link};
  }
  // 신고 링크
  span:nth-child(2) a {
    padding-left: 10px;
    color: ${({ theme }) => theme.green};
  }
`;

const ACTOffMenu = styled.div`
  padding-right: 10px;
  // 자동완성 끄기 링크
  a {
    color: ${({ theme }) => theme.colors.link};
  }
`;

const CustomLink = ({ href, string }: { href: string; string: string }) => {
  return (
    <span>
      <a href={href}>{string}</a>
    </span>
  );
};

const Toolbar = ({
  isOpen,
  setMenu,
}: {
  isOpen: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toggleMenu = (e: any) => {
    const arrow = document.getElementById('arrow-icon');
    if (e.target === arrow || e.target === arrow?.childNodes[0]) return;
    setMenu(false);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, toggleMenu);
  return (
    <ATCSidebar>
      <Menu isOpen={isOpen} ref={wrapperRef}>
        <UserTool>
          <CustomLink
            href="https://help.naver.com/support/service/main.help?serviceNo=605&categoryNo=1987"
            string="도움말"
          />
          <CustomLink
            href="https://help.naver.com/support/contents/contents.help?serviceNo=605&categoryNo=18215"
            string="신고"
          />
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
