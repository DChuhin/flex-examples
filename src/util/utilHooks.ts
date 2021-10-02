import { useContext, useEffect } from 'react';
import { AppContext, AppState } from 'state/AppContext';

export const useKey = (key: string, handler: () => void) => {
  const handlerWrapper = (e: KeyboardEvent) => {
    if (e.code === key) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handlerWrapper);
    return () => document.removeEventListener('keydown', handlerWrapper);
  });
};

export const useAppState = () => useContext<AppState>(AppContext);