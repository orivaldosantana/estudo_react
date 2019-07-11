import React, { Component } from 'react';

class Authorizations extends Component { 
    constructor(props){ 
        super(props);
        this.submitAuthorization = this.submitAuthorization.bind(this);
        this.handleChangeDevices = this.handleChangeDevices.bind(this); 
        this.state = {
            devices: [],
            selectedDevice: ""
        };
    
    }

    async submitAuthorization(e){
        
    }

    handleChangeDevices(e) {
        console.log('Seleção Dispositivo: ' + e.target.value); 
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
                            <option value="0">Grapefruit</option>
                            <option value="1">Lime</option>
                            <option value="2">Coconut</option>
                            <option value="3">Mango</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary"onClick={this.submitAuthorization} >Cadastrar</button>
                    
                </form>
            </div>
            </div>
            </div>
        );
    }
}

export default Authorizations; 
