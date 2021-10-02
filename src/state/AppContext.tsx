import React, { createContext, ReactElement, useState } from 'react';

export interface AppState {
  isDescriptionVisible: boolean,
  toggleDescriptionVisible: () => void,
}

export const AppContext = createContext<AppState>({
  isDescriptionVisible: false,
  toggleDescriptionVisible: () => {
  },
});

interface AppStateProps {
  children: ReactElement,
}

const AppStateProvider = ({ children }: AppStateProps) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const toggleDescriptionVisible = () => setDescriptionVisible(prev => !prev);
  const context = {
    isDescriptionVisible,
    toggleDescriptionVisible,
  }
  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

export default AppStateProvider;