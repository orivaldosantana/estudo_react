import React, { Component } from 'react'; 
import Octicon, {Play} from '@primer/octicons-react'
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

    handleSubmit(e){
        e.preventDefault();
        this.deviceState = ! this.deviceState; 
        console.log("Submit "+this.deviceState );


    }

    render() {
        return (
            <div className="device">
                  <header> 
                    <div className="device-info">     
                        <span> Porta 1 </span> 
                        <span className="status"> Conectado - Desligado </span> 
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