import React, { Component } from 'react';
import { isAuthenticated } from '../services/auth'; 
import { Redirect } from 'react-router'
import Footer from '../components/Footer'; 
import AuthorizationCard from "../components/AuthorizationCard"

import "../components/Authorization.css" 

import api from "../services/api";


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
            error: "",
            authorizations: []
        };
    
    }

    async submitAuthorization(e){

        this.setState({ error: 0}); 
        e.preventDefault();
        let device = this.state.selectedIdDevice; 
        let user = this.state.selectedIdUser; 
        const enabled = true; 
        if ( ! device  ) {
            device =  this.state.devices[0]._id; 
        }
        if ( ! user ){
            user =  this.state.users[0]._id; 
        }
        try {
            console.log("inserir autorização"); 
            console.log(device+" "+user);
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

        if (  this.state.error !== 0  ){
            alert(this.state.error);
            console.log("Error:"+this.state.error+"!");
        } 
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

    populateAuthorizations = async () => {
        const request = await api.get('/authorization/full');
        if(request !== undefined){
            this.setState({authorizations: request.data.authorizations}); 
            console.log(this.state.authorizations); 
        }
    }
        

    handleChangeDevices(e) {
        //console.log('Seleção Dispositivo: ' + e.target.value); 
        this.setState({ selectedIdDevice: this.state.devices[e.target.value]._id})
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
            await this.populateAuthorizations();  
        }
    }

    render() {
        return ( 
            <div >
                { (!isAuthenticated() ) ? 
                <Redirect to="/login"/> : 
            <div className="container"> 
 



            <div className="card" id="auth_card_edit">
            <div className="card-body">

                <form>
                    <h3> Autorização </h3>
                    <div className="form-group">
                        <label htmlFor="selectDevices">Dispositivos:</label>
                        <select className="form-control"  value={this.state.value} onChange={this.handleChangeDevices} id="selectedIdDevice">


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

            <section id="auth-list">
            {this.state.authorizations.map((authori, index) => (
                <AuthorizationCard key={index}>
                {authori}
                </AuthorizationCard>
            ))}
            </section>

            </div> 
            }
            <Footer>

            </Footer>
            </div>
        );
    }
}

export default Authorizations; 
