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

    
    componentDidMount() {
        this.setState(this.props.children); 
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.deviceState = ! this.deviceState; 
        console.log(this.state.name+" "+this.deviceState );
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