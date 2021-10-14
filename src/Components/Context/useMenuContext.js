import { createContext, useContext, useState } from 'react';

const MenuContext = createContext(null);

const MenuProvider = ({ children }) => {
  const [isOpen, setMenu] = useState(false);
  return <MenuContext.Provider value={{ isOpen, setMenu }}>{children}</MenuContext.Provider>;
};

const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('Cannot find MenuProvider');
  }
  return context;
};
export { MenuProvider, useMenuContext };
