import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const config = {
  scope: "/",
  registerOptions: {
    updateViaCache: "none"
  },
  onSuccess: (registration) => {
    console.log("Service worker registration successful:", registration);
  },
  onUpdate: (registration) => {
    console.log("Service worker update available:", registration);
  },
};


serviceWorkerRegistration.register(config);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
