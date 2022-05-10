import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { UserContextProvider } from "./app/context/user-context";
import App from './app/layout/App';

import "./index.css";
import "./assets/css/style.bundle.css";
import "./assets/plugins/global/plugins.bundle.css";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);