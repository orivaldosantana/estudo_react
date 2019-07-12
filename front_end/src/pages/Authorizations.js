import React, { Component } from 'react';

import api from "../services/api";

import { isAuthenticated } from '../services/auth'; 
 

class Authorizations extends Component { 
    constructor(props){ 
        super(props);
        this.submitAuthorization = this.submitAuthorization.bind(this);
        this.handleChangeDevices = this.handleChangeDevices.bind(this); 
        this.handleChangeUsers = this.handleChangeUsers.bind(this); 
        
        this.state = {
            selectedIdUser: "",
            selectedIdDevice: "", 
            devices: [],
            selectedDevice: "",
            users: [], 
            error: ""
        };
    
    }

    async submitAuthorization(e){

        this.setState({ error: ""}); 
        e.preventDefault();
        const device = this.state.selectedIdDevice; 
        const user = this.state.selectedIdUser; 
        const enabled = true; 
        console.log(this.state.selectedIdDevice+" "+this.state.selectedIdUser);
        if ( !device ) {
            this.setState({ error: "Selecione um dispositivo!" });
        } else if ( !user ){
            this.setState({ error: "Selecione um usuário!" });
        }
        else {
            try {
                console.log("inserir autorização"); 
                const response = await api.post("/authorization", {device, user, enabled });
                if ( response.data.authorization._id !== "" ){
                    alert("Autorização cadastrada com sucesso!"); 
                }
                console.log(response.data); 
                 
            } catch (err) {
                this.setState({
                error:
                    "Houve um problema no cadastro de autorização."
                });
            }
        }
        console.log("Error:"+this.state.error); 
    }

    populateDevices = async () => {
        const request = await api.get('/device');
        if(request !== undefined){
            this.setState({devices: request.data.devices}); 
            console.log(this.state.devices); 
        }
    }

    populateUsers = async () => {
        const request = await api.get('/auth/users');
        if(request !== undefined){
            this.setState({users: request.data.users}); 
            console.log(this.state.users); 
        }
    }
        

    handleChangeDevices(e) {
        //console.log('Seleção Dispositivo: ' + e.target.value); 
        this.setState({selectedIdDevice: this.state.devices[e.target.value]._id})
    }

    handleChangeUsers(e) {
        //console.log('Seleção Usuários: ' + e.target.value); 
        this.setState({selectedIdUser: this.state.users[e.target.value]._id})
    }

    async componentDidMount() {

        if (isAuthenticated()) {
            document.title = "Autorizações";
            await this.populateDevices();
            await this.populateUsers(); 
        }
    }

    render() {
        return ( 
            <div className="container"> 
            <div className="card" id="device_card">
            <div className="card-body">

                <form>
                    <h3> Autorização </h3>
                    <div className="form-group">
                        <label htmlFor="selectDevices">Dispositivos:</label>
                        <select className="form-control"  value={this.state.value} onChange={this.handleChangeDevices} id="selectDevices">


                            {this.state.devices.map((device, index) => (
                                <option value={index} key={index}>{device.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="selectUsers">Usuários:</label>
                        <select className="form-control"  value={this.state.value} onChange={this.handleChangeUsers} id="selectUsers">


                            {this.state.users.map((user, index) => (
                                <option value={index} key={index}>{user.userName}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary"onClick={this.submitAuthorization} >Autorizar</button>
                    
                </form>
            </div>
            </div>
            </div>
        );
    }
}

export default Authorizations; 
