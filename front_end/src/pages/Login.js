import React, { Component } from 'react'; 
import { Link } from "react-router-dom";

import api from "../services/api";
import { login } from "../services/auth";
import { setUserName } from "../services/auth";



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
        this.setState({ error: ""}); 
        e.preventDefault();
        const { email, password } = this.state;
        
        if (!email || !password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {
            try {
                
                const response = await api.post("/auth/authenticate", { email, password });
                login(response.data.token);
                setUserName(response.data.user.userName); 
                console.log("logar: "+response.data.user.userName);  
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
                    <h3> Login </h3>
                    {this.state.error && <p>{this.state.error}</p>}
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
                    <hr />
                    <Link to="/signup">Cadastrar Usuário</Link>
                </form>
            </div>
            </div>
            </div>
        );
    }
}

export default Login; 