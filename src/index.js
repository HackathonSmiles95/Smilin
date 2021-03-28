import "./main/app.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

reportWebVitals();
