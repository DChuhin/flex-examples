import React from 'react';
import AppRouter from 'router/AppRouter';
import AppStateProvider from 'state/AppContext';

import './App.css';

function App() {
  return (
    <div className="app-root">
      <AppStateProvider>
        <AppRouter />
      </AppStateProvider>
    </div>
  )
}

export default App;
