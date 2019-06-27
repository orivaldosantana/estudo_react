import React, { Component } from 'react'; 
import Octicon, {Play} from '@primer/octicons-react'

import api from "../services/api";

import './Device.css'



class SimpleDevice extends Component { 
    constructor(props){
        super(props); 
        this.state = {
            name: "", 
            status: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.deviceState = 0; 
    }

    
    componentDidMount() {
        this.setState(this.props.children); 
    }
    
    async handleSubmit(e){
        e.preventDefault();
        this.deviceState = ! this.deviceState;
        let valueToSend = "" 
        this.deviceState ? valueToSend = "v" : valueToSend = "f";  
        console.log(this.state.name+" "+this.deviceState+" "+this.state.device_id); 
        try {
            const response = await api.post("/device/"+this.state.device_id+"/", {
                value: valueToSend
            });
            this.setState({ status: "Comando enviado!" }); 
            console.log(response.data); 
    
        }
        catch (err) {
            console.log(err); 
            this.setState({
                error:
                    "Houve um problema com o envio do comando para o dispositivo IoT."
                });
        } 
    }

    render() {
        return (
            <div className="device">
                  <header> 
                    <div className="device-info">     
                        <span> {this.state.name} </span> 
                        <span className="status"> {this.state.status} </span> 
                    </div>
                    <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                        <Octicon icon={Play} size='medium' ariaLabel='Play'/>
                    </button> 
                    </form> 
                  </header>
            </div> 
        );
    }
}

export default SimpleDevice; 