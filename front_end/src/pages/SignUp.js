import React, { Component } from 'react'; 
import { Link } from "react-router-dom";

import api from "../services/api";
import { login } from "../services/auth";

import './Login.css'

class SignUp extends Component { 
    constructor(props){
        super(props); 
        this.registerUser = this.registerUser.bind(this);
        this.handleChange = this.onChange.bind(this);
        
        this.state = {
            userName: "",
            email: "",
            password: "",
            error: ""
        };
        
    }

    async registerUser(e){
        this.setState({ error: ""}); 
        e.preventDefault();
        const { userName, email, password } = this.state;
        
        if (!email || !password || !userName) {
            this.setState({ error: "Preencha todos os campos para continuar!" });
        } else {
            try {
                console.log("inserir usuário"); 
                const response = await api.post("/auth/register", {userName, email, password });
                login(response.data.token);
                
                console.log(response.data); 
                this.props.history.push("/user");
            } catch (err) {
                this.setState({
                error:
                    "Houve um problema cadastro do usuário."
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
                    <h3> Cadastro de Usuário </h3>
                    {this.state.error && <p>{this.state.error}</p>}
                    <div className="form-group">
                        <label htmlFor="inputUserName">Nome</label>
                        <input 
                            id="inputUserName"
                            type="text" 
                            className="form-control" 
                            name="userName" 
                            aria-describedby="userNameHelp" 
                            placeholder="Digite seu nome"
                            onChange={this.handleChange}
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email</label>
                        <input 
                            id="inputEmail"
                            type="email" 
                            className="form-control" 
                            name="email" 
                            aria-describedby="emailHelp" 
                            placeholder="Digite seu email"
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

                    <button type="submit" className="btn btn-primary"onClick={this.registerUser} >Cadastrar</button>
                    <hr />
                    <Link to="/">Fazer login</Link>
                </form>
            </div>
            </div>
            </div>
        );
    }
}

export default SignUp; 