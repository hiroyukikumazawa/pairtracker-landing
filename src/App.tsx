import React from 'react';
import AppRoutes from './routes';
import MyWalletProvider from './providers/WalletProvider';

const App: React.FC = () => {
  return (
    <MyWalletProvider>
      <AppRoutes />
    </MyWalletProvider>
  );
};

export default App;