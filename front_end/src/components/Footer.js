import React, { Component } from 'react';  
import { Redirect } from 'react-router-dom'
import { logout } from "../services/auth"; 
import { getUserName } from "../services/auth";

import './Footer.css'; 

class Footer extends Component { 
    constructor(props){
        super(props);
        //this.makeLogout = this.makeLogout.bind(this); 
        this.state = {
            userName: "Orivaldo",
            redirect: false
        }
    }

    makeLogout = () => {

        logout(); 
        //this.props.history.push("/login");
        this.setState({
            redirect: true
        })
    }


    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/target' />
        }
    }

    async componentDidMount() {
        this.setState({userName: getUserName()}); 
        console.log("footer: "+getUserName() ); 
    }

    render() {
        return (
            
            <footer>
                {this.renderRedirect()}
                <div className="footer-content">
                    <p>{this.state.userName}</p>
                    
                    <button type="submit" className="btn btn-link" onClick={this.makeLogout}>
                            Sair
                    </button> 
                </div>

            </footer>
        )
    };


}


export default Footer; 