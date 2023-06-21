import React from 'react';
import ReactDom from 'react-dom/client';
import { App } from './App';
import './styles.css';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <div className="index">
    <h1 className='indexH1'>index.js</h1>
    <App />
  </div>
);
