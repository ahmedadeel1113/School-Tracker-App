// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're using the correct import
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'root' matches the ID in your HTML
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
