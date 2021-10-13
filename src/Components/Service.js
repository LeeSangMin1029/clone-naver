import styled from 'styled-components';

const Junior = styled.a`
  font-family: 'Jua';
  text-decoration: none;
  user-select: none;
  color: #ccd1d1;
  font-size: 14px;
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

const Service = () => {
  return (
    <div>
      <Junior href="https://jr.naver.com/">
        <span>쥬</span>
        <span>니</span>
        <span>어</span>
        <span>네이버</span>
      </Junior>
    </div>
  );
};

export default Service;
