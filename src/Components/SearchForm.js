import styled from 'styled-components';
import Keyboard from './Keyboard.js';
import ExpandArrow from './ExpandArrow.js';
import SearchButton from './SearchButton.js';

const SearchStyle = styled.div`
  width: 600px;
  height: 52px;
  border: 2px solid #19ce60;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  height: 100%;
  outline: 0;
  font-size: 18px;
  margin: 0 12px;
  flex: 1;
`;

const SearchForm = () => {
  return (
    <SearchStyle>
      <form action="/" method="get" name="serach" />
      <Input type="text" form="search" id="header-search" name="search" />
      <Keyboard />
      <ExpandArrow />
      <SearchButton />
    </SearchStyle>
  );
};

export default SearchForm;
