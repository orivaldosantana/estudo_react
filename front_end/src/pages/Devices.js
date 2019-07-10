import React, { Component } from 'react';
 
import './Devices.css';
import api from "../services/api";

class Devices extends Component { 
    constructor(props){ 
        super(props); 
        this.submitDevice = this.submitDevice.bind(this);
        this.handleChange = this.onChange.bind(this);
        
        this.state = {
            name: "",
            description: "",
            topicToRead: "",
            topicToWrite: ""
        };
    }

    async submitDevice(e){    
        e.preventDefault();
        console.log(this.state); 
    
    }

    onChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    render() {
        return ( 
            <div className="container"> 
            <div className="card" id="device_card">
            <div className="card-body">
                 
                
                <form  >
                    <h3> Dispositivo </h3>
                    <div className="form-group">
                        <label htmlFor="inputName">Nome:</label>
                        <input 
                            id="inputName"
                            type="text" 
                            className="form-control" 
                            name="name" 
                            placeholder="Entre com o nome"
                            onChange={this.handleChange}
                         />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDescription">Descrição:</label>
                        <input 
                            id="inputDescription"
                            type="text" 
                            className="form-control" 
                            name="description" 
                            placeholder="Entre com a descrição"
                            onChange={this.handleChange}
                         />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputTopicToWrite">Tópico para escrita:</label>
                        <input 
                            id="inputTopicToWrite"
                            type="text" 
                            className="form-control" 
                            name="topicToWrite" 
                            placeholder="Entre com o tópico para escrita"
                            onChange={this.handleChange}
                         />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputTopicToRead">Tópico para leitura:</label>
                        <input 
                            id="inputTopicToRead"
                            type="text" 
                            className="form-control" 
                            name="topicToRead" 
                            placeholder="Entre com o tópico para leitura"
                            onChange={this.handleChange}
                         />
                    </div>

                     

                    <button type="submit" className="btn btn-primary"onClick={this.submitDevice} >Cadastrar</button>
                    
                </form>
            </div>
            </div>
            </div>
        );
    }

}

export default Devices; 