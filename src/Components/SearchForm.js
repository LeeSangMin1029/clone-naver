import styled from 'styled-components';
import Keyboard from './Keyboard.js';
import ExpandArrow from './ExpandArrow.js';
import SearchButton from './SearchButton.js';
import Toolbar from './Toolbar.js';
import { useMenuContext } from './Context/useMenuContext.js';

const SearchStyle = styled.div`
  width: 620px;
  height: 52px;
  border: 2px solid #19ce60;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.header};
  :focus-within {
    box-shadow: 0px 2px 9px 0px rgba(0 0 0/ 10%);
  }
`;

const Input = styled.input`
  background-color: inherit;
  height: 100%;
  outline: 0;
  font-size: 18px;
  margin: 0 12px;
  flex: 1;
  color: ${({ theme }) => theme.inputColor};
`;

const SearchForm = () => {
  const { isOpen, setMenu } = useMenuContext();
  const toggleMenu = (e) => {
    setMenu(e.target.checked);
  };
  return (
    <SearchStyle>
      <Toolbar isOpen={isOpen} setMenu={setMenu} />
      <form action="/" method="get" name="serach" />
      <Input type="text" form="search" id="header-search" name="search" />
      <Keyboard />
      <ExpandArrow toggleMenu={toggleMenu} isOpen={isOpen} />
      <SearchButton />
    </SearchStyle>
  );
};

export default SearchForm;
