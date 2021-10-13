import styled from 'styled-components';
import { ReactComponent as ArrowRight } from '../svg/arrow-right.svg';

const ArrowStyle = styled(ArrowRight)`
  margin: 0 5px;
`;

const ArrowToSetStartingPage = () => {
  return <ArrowStyle width="15px" height="15px" fill="#7B7D7D" />;
};

export default ArrowToSetStartingPage;
