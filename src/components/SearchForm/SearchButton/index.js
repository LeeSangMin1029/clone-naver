// style
import styled from 'styled-components';

// svg
import { ReactComponent as Search } from './search.svg';

const SearchStyle = styled.button`
  width: 52px;
  height: 52px;
  background-color: #19ce60;
  cursor: pointer;
`;

const SearchButton = () => {
  return (
    <SearchStyle>
      <Search fill="white" width="25px" height="25px" />
    </SearchStyle>
  );
};

export default SearchButton;
