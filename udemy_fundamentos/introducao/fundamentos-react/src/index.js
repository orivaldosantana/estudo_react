
import './index.css'
import ReactDOM from 'react-dom';
import React from 'react'

import Parametro from './Componentes/Parametro'

ReactDOM.render(
  <div>
    <Parametro p1="Primeiro" p2="Segundo"></Parametro>
  </div>
  ,
  document.getElementById('root')
);