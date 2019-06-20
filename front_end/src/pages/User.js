import React, { Component } from 'react'; 
import SimpleDevice from '../components/SimpleDevice'; 
import './User.css'; 



class User extends Component { 
    constructor(){
        super();
        this.state = { 
            authorizations: [
                {
                    name: "Dispositivo 1",
                    device: "5d02f4de547e1308c31ce621",
                    status: "Conectado - Ligado"
                },
                {
                    name: "Novo Dispositivo 2",
                    description: "5d02f4de547e1308c31ce621",
                    status: "Conectado - Ligado"
                },
                {
                    name: "Novo Dispositivo 3",
                    description: "5d02f4de547e1308c31ce621",
                    status: "Conectado - Ligado"
                }
            ]
         };
    
    }
    render() {
        return (
            <section id="device-list"> 
                {this.state.authorizations.map( device => (
                    <SimpleDevice>
                    {device} 
                    </SimpleDevice> 
                ))} 
            </section>  
        );
    }
}

export default User; 