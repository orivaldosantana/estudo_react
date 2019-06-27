import React, { Component } from 'react';
import SimpleDevice from '../components/SimpleDevice';
 
import './User.css';
import api from "../services/api";


class User extends Component {
    constructor() {
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


    populateAuthorizations = async () => {
        
        //axios.defaults.headers.common = {'Authorization': `Bearer ${this.auth.getToken()}`}
        const request = await api.get('/device');
        console.log(request);
        if(request !== undefined){
            const data = request.data.devices;
            console.log(data[0]);
        }

    }

    async componentDidMount() {
        
        document.title = "Devices";
        await this.populateAuthorizations();
    
    }

    

    render() {
        return (

            
            <section id="device-list">
                {this.state.authorizations.map((device, index) => (
                    <SimpleDevice key={index} >
                        {device}
                    </SimpleDevice>
                ))}
            </section>
        );
    }
}

export default User; 