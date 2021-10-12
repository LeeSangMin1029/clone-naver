import styled from 'styled-components';

const Link = styled.a`
  user-select: none;
`;

const Logo = () => {
  return (
    <Link href="/">
      <img alt="logo" src="/img/logo_green.png" objectFit="fill" layout="fill" quality={100} width={165} height={32} />
    </Link>
  );
};
export default Logo;
