import React, { Component } from 'react';
import SimpleDevice from '../components/SimpleDevice';
import axios from "axios";
import './User.css';


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
        const request = await axios.get('http://localhost:3002/device');
        if(request !== undefined){
            const data = request.data;
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