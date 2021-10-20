// style
import styled from 'styled-components';

const Contents = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

const Junior = styled.a`
  color: #ccd1d1;
  font-family: 'Jua';
  font-size: 13px;
  margin: 5px 10px 0;

  :hover span:nth-child(1) {
    color: #03a9f4;
  }
  :hover span:nth-child(2) {
    color: #f44336;
  }
  :hover span:nth-child(3) {
    color: #ffc107;
  }
  :hover span:nth-child(4) {
    color: #19ce60;
  }
`;

const HappyBean = styled.a`
  color: #ccd1d1;
  font-family: 'Hahmlet';
  font-size: 12px;

  :hover {
    color: #19ce60;
  }
`;

const SetStartPageLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 11px;
    color: ${({ theme }) => theme.startLinkColor};
  }
  a:hover {
    text-decoration: underline;
  }
  a:after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f054';
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin: 0 5px;
    box-shadow: 0px 2px 3px 1px ${({ theme }) => theme.startLinkShadow};
    border-radius: 100%;
    width: 15px;
    height: 15px;
    text-align: center;
    font-size: 0.5rem;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.bg_startLink};
  }
`;

const ExternalServiceArea = () => {
  return (
    <Contents>
      <SetStartPageLink>
        <a href="https://help.naver.com/support/contents/contents.help?serviceNo=1074&categoryNo=16719">네이버를 시작페이지로</a>
      </SetStartPageLink>
      <Junior href="https://jr.naver.com/">
        <span>쥬</span>
        <span>니</span>
        <span>어</span>
        <span>네이버</span>
      </Junior>
      <HappyBean href="https://happybean.naver.com/">해피빈</HappyBean>
    </Contents>
  );
};

export default ExternalServiceArea;
