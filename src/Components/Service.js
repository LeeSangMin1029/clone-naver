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

const Service = () => {
  return (
    <Contents>
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

export default Service;
