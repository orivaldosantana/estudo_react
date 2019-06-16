import React from 'react'; 
import './Header.css'; 

import logo from '../assets/iot.svg'

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <h1>Sistema de Acesso - IoT </h1>
                <img src={logo} width="60" alt="IoTSystem" />
            </div> 
        </header> 
    ); 
}