// src/App.tsx
import React from 'react';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomePage />
    </div>
  );
};

export default App;
