import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './styles.css';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <>
    <h1>hi</h1>
    <App />
  </>
);
