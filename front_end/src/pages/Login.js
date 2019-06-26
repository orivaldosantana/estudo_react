import React, { Component } from 'react'; 
import AuthService from '../components/AuthService';

import './Login.css'

class Login extends Component { 
    constructor(props){
        super(props); 
        this.authenticateUser = this.authenticateUser.bind(this);
        this.handleChange = this.onChange.bind(this);
        this.auth = new AuthService();
        this.state = {

        }  
    }

    async authenticateUser(e){
        e.preventDefault();
        try {
            const response = await this.auth.login(this.state.email,this.state.password); 
            console.log(response.token);
            this.props.history.replace('/user');
            
        } catch (err) {
            // tratamento do erro 
            alert(err);
        }
    }

    onChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    componentWillMount(){
        if(this.auth.loggedIn())
            this.props.history.replace('/user');
    }

    render() {
        return (
            <div className="container"> 
            <div className="card">
            <div className="card-body">
                 
                
                <form  >
                    <h2> Login </h2>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email</label>
                        <input 
                            id="inputEmail"
                            type="email" 
                            className="form-control" 
                            name="email" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            onChange={this.handleChange}
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Senha</label>
                        <input 
                            id="inputPassword"
                            type="password" 
                            className="form-control" 
                            name="password" 
                            placeholder="Password" 
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary"onClick={this.authenticateUser} >Entrar</button>
                </form>
            </div>
            </div>
            </div>
        );
    }
}

export default Login; 