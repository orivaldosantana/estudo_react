import React, { Component } from 'react';  
import api from "../services/api";

import './Authorization.css'



class AuthorizationCard extends Component { 
    constructor(props){
        super(props); 
        this.state = {
            id: "",
            enabled: false,
            device_id: "",
            device_name: "",
            user_id: "",
            user_name:""
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    componentDidMount() {
        this.setState(this.props.children); 
    }
    
    async handleSubmit(e){
        e.preventDefault();
 
 
        console.log(this.state.id+" "+this.state.device_name+" "+this.state.user_name); 
    
        try {
            const response = await api.delete("/authorization/"+this.state.id);
 
            if ( response.data.result === "ok" ){
                alert("Autorização apagada com sucesso!"); 
            }
            console.log(response.data); 
    
        }
        catch (err) {
            console.log(err); 
            this.setState({
                error:
                    "Houve um problema ao apagar a autorização."
                });
        }
    }

    render() {
        return (
            <div className="cardauth">

                    <div className="card-info">     
                        <span> Dispositivo: {this.state.device_name} </span> 
                        <span className="user"> Usuário: {this.state.user_name} </span> 
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Deletar 
                        </button> 
                    </form> 

            </div> 
        );
    }
}

export default AuthorizationCard; 