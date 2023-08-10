import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyle, FontStyles } from "./assets/styles";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <FontStyles />
      <BrowserRouter basename="/plan-front">
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>    
      </BrowserRouter>

    </React.StrictMode>
  </Provider>
)
