import React, { Component } from 'react';
import { Redirect } from 'react-router'
import SimpleDevice from '../components/SimpleDevice';
import Footer from '../components/Footer'; 
import { isAuthenticated } from '../services/auth'; 
 
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

        if (isAuthenticated()) {
            document.title = "Devices";
            await this.populateAuthorizations();
        }
    }

    

    render() {
        return (
            <div>
            <section id="device-list">
                { (!isAuthenticated() ) ? <Redirect to="/login"/> :
                  this.state.authorizations.map((device, index) => (
                    <SimpleDevice key={index} >
                        {device}
                    </SimpleDevice>
                ))}
            </section>
            <Footer>

            </Footer>
            </div> 
        );
    }
}

export default User; 