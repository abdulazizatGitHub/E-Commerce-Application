import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MYContextProvider from './Common/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MYContextProvider>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='179119987858-jumt1ud6ktir75lioe1ohgaj629v8da1.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </MYContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
