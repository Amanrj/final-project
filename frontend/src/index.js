import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import FlightPersonProvider from './context/FlightPerson';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <FlightPersonProvider>
        <Auth0Provider
            domain="dev-qtoto6rrmzbyzp0l.us.auth0.com"
            clientId="17wlR4jre0MOM4kutZfYjYOO7gXmIP98"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Auth0Provider>
    </FlightPersonProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
