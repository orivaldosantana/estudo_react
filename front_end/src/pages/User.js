import React, { Component } from 'react'; 
import Octicon, {Play} from '@primer/octicons-react'
import './User.css'; 

class User extends Component { 
    render() {
        return (
            <section id="device-list"> 
                <device>
                  <header> 
                    <div className="device-info">     
                        <span> Porta 1 </span> 
                        <span className="status"> Conectado - Desligado </span> 
                    </div>
                    <Octicon icon={Play} size='medium' ariaLabel='Play'/>
                  </header>
                </device> 

                <device>
                  <header> 
                    <div className="device-info">     
                        <span> Porta 2 </span> 
                        <span className="status"> Conectado - Desligado </span> 
                    </div>
                    <a href='https://github.com'>
                        <Octicon icon={Play} size='medium' ariaLabel='Play'/>
                    </a>
                  </header>
                </device>

                <device>
                  <header> 
                    <div className="device-info">     
                        <span> Porta 3 </span> 
                        <span className="status"> Conectado - Desligado </span> 
                    </div>
                  </header>  
                </device> 
 
            </section>  
        );
    }
}

export default User; 