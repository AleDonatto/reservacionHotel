import React from 'react'
import { ProviderContext } from './hooks/ProviderContext';
import { Routes } from "./routes/Routes";

function App() {
  return (
      <div className="App">
        <ProviderContext>
          <Routes />
        </ProviderContext>
      </div>
  );
}

export default App;
