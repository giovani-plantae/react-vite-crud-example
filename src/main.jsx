import React from 'react'
import { I18nextProvider } from 'react-i18next';
import i18n from './Services/I18n/I18n.js';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </React.StrictMode>,
    );
