// styled
import styled from 'styled-components';

// components with svg
import KeyboardIcon from './KeyboardIcon';
import ToggleButton from './ToggleButton';
import SearchButton from './SearchButton';

// component
import Toolbar from './Toolbar';

// context
import { useMenuContext } from 'context/useMenuContext';

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
      <KeyboardIcon />
      <ToggleButton toggleMenu={toggleMenu} isOpen={isOpen} />
      <SearchButton />
    </SearchStyle>
  );
};

export default SearchForm;
