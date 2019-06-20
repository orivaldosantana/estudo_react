import React, { Component } from 'react'; 
import Octicon, {Play} from '@primer/octicons-react'

class SimpleDevice extends Component { 
    render() {
        return (
            <device>
                  <header> 
                    <div className="device-info">     
                        <span> Porta 1 </span> 
                        <span className="status"> Conectado - Desligado </span> 
                    </div>
                    <Octicon icon={Play} size='medium' ariaLabel='Play'/>
                  </header>
            </device> 
        );
    }
}

export default SimpleDevice; 