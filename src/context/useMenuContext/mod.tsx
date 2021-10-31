// react function
import React, { createContext, useContext, useState } from 'react';

interface IContextProps {
  isOpen: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const MenuContext = createContext({} as IContextProps);

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setMenu] = useState(false);
  const value = { isOpen, setMenu };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('Cannot find MenuProvider');
  }
  return context;
};
export { MenuProvider, useMenuContext };
