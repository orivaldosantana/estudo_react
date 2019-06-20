import React, { Component } from 'react'; 
import './Login.css'

class Login extends Component { 
    render() {
        return (
            <div className="container"> 
            <div className="card">
            <div className="card-body">
                 
                
                <form  >
                    <h2> Login </h2>
                    <div className="form-group">
                        <label forHtml="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label forHtml="exampleInputPassword1">Senha</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Entrar</button>
                </form>
            </div>
            </div>
            </div>
        );
    }
}

export default Login; 