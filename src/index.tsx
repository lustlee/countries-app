import React from 'react';
import {BrowserRouter as Routes} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {ThemeProvider} from "./contexts/ThemeContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <Routes>
                <App/>
            </Routes>
        </ThemeProvider>
    </React.StrictMode>
);