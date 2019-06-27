import React, { Component } from 'react';
import SimpleDevice from '../components/SimpleDevice';
 
import './User.css';
import api from "../services/api";


class User extends Component {
    constructor() {
        super();
         
        this.state = {
            authorizations: [
                
            ]
        };

    }


    populateAuthorizations = async () => {
        
        //axios.defaults.headers.common = {'Authorization': `Bearer ${this.auth.getToken()}`}
        const request = await api.get('/authorization/devices');
        if(request !== undefined){
            const data = request.data.authorizations;
            let auths = []; 
            for (let i = 0; i < data.length; i++){
                auths[i] = { 
                    name: data[i].name,
                    device_id: data[i].device_id,
                    status: "Desconectado."
                }; 
            }
            this.setState({authorizations: auths}); 
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