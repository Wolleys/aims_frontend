import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { UserContextProvider } from './context/UserContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
