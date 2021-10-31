// react function
import { useEffect } from 'react';

const useOutsideAlerter = (ref: any, func: Function) => {
  useEffect(() => {
    function handleClickOutside(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        func(e);
      }
    }
    if (!document) return;
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document?.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, func]);
};

export default useOutsideAlerter;
