import React from 'react';
import App from './App.js';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.js';

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);
