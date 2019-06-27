import React, { Component } from 'react'; 

import api from "../services/api";
import { login } from "../services/auth";



import './Login.css'

class Login extends Component { 
    constructor(props){
        super(props); 
        this.authenticateUser = this.authenticateUser.bind(this);
        this.handleChange = this.onChange.bind(this);
        
        this.state = {
            email: "",
            password: "",
            error: ""
        };
        
    }

    async authenticateUser(e){
        
        e.preventDefault();
        const { email, password } = this.state;
        
        if (!email || !password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {
            try {
                console.log("logar"); 
                const response = await api.post("/auth/authenticate", { email, password });
                login(response.data.token);
                
                console.log(response); 
                this.props.history.push("/user");
            } catch (err) {
                this.setState({
                error:
                    "Houve um problema com o login, verifique suas credenciais."
                });
            }
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