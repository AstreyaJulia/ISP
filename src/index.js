import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Toaster } from 'react-hot-toast';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/JWTContext';
import { persistor, store } from './store/index';
import './theme/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Toaster position="top-right" toastOptions={{ className: 'react-hot-toast' }} />
          <App />
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
