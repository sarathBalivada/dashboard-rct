import React from "react";
import  ReactDOM  from "react-dom";


import './index.css'; /* for importinf tailwind utilities */
import App from './App.js';

import { ContextProvider } from './contexts/ContextProvider.js'


 ReactDOM.render(
    <ContextProvider >
         <App /> 
    </ContextProvider>,
    document.getElementById('root'));
