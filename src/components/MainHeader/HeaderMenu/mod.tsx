import React from 'react';
// style
import styled from 'styled-components';

// components
import HeaderMenuItem from './HeaderMenuItem/mod.tsx';
import Weather from './Weather/mod.tsx';
import SeeMoreButton from './SeeMoreButton/mod.tsx';

const StyledBaseMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  box-shadow: 0px 2px 4px 0px rgba(0 0 0 / 12%);
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin: 0 auto;
  width: 1190px;
  height: 100%;
  div {
    display: flex;
    align-items: center;
    padding: 16px 0;
  }
`;

const menuObjects = [
  { name: '메일', className: 'color mail', href: 'https://mail.naver.com/' },
  { name: '카페', className: 'color', href: 'https://section.cafe.naver.com/' },
  { name: '블로그', className: 'color', href: 'https://section.blog.naver.com/' },
  { name: '지식in', className: 'color', href: 'https://kin.naver.com/' },
  { name: '쇼핑', className: 'color', href: 'https://shopping.naver.com/' },
  { name: '쇼핑', className: 'color live', href: 'https://shoppinglive.naver.com/home' },
  { name: 'Pay', className: 'color', href: 'https://order.pay.naver.com/home' },
  { name: 'TV', className: 'color tv', href: 'https://tv.naver.com/' },
  { name: '사전', href: 'https://dict.naver.com/' },
  { name: '뉴스', href: 'https://news.naver.com/' },
  { name: '증권', href: 'https://finance.naver.com/' },
  { name: '부동산', href: 'https://land.naver.com/' },
  { name: '지도', href: 'https://map.naver.com/' },
  { name: 'VIBE', href: 'https://vibe.naver.com/' },
  { name: '책', href: 'https://book.naver.com/' },
  { name: '웹툰', href: 'https://comic.naver.com/' },
];

const StyledUnorderedList = styled.ul`
  display: flex;
  width: auto;
`;

const HeaderMenu = () => {
  const items = menuObjects.map((item, index) => {
    return (
      <HeaderMenuItem key={index} className={item.className || ''} href={item.href}>
        {item.name}
      </HeaderMenuItem>
    );
  });

  return (
    <StyledBaseMenu>
      <StyledMenu>
        <div>
          <StyledUnorderedList>{items}</StyledUnorderedList>
          <SeeMoreButton />
        </div>
        <Weather />
      </StyledMenu>
    </StyledBaseMenu>
  );
};

export default HeaderMenu;
