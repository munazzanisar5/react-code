"use client";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './Components/Card.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
    <App />
    {/* <Card/> */}
    <Card userName="Alveera" btnText="Submit"/>
    <Card userName="Shaheen" btnText="Click me"/>
    </>
)
