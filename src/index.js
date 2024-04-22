import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain='nutricao.us.auth0.com'
        clientId='GD6YRAn2io2gefs9GkSzpBpa0VXwr6R6'
        redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>
);