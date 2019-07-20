# Tutorial React 

## Criando a aplicação 

Comando yarn 
```
$ yarn create react-app nome_app 
```

Na pasta src deixar apenas: 
* index.js 
* App.js 

Ponto de partida do arquivo index.js: 
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
ReactDOM.render(<App />, document.getElementById('root'));
``` 

Para o arquivo App.js: 
```javascript
import React from 'react';

function App() {
  return (
    <div className="App">
      
      <h1> Ponto de Partida </h1> 
      
    </div>
  );
}
export default App;
``` 

Comando para executar: 
```
$ yarn start
```

Instalação do pacote para gerenciar rotas 
```
$ yarn add react-router-dom
``` 

Instalação do pacote para comunicação com uma API remota
```
$ yarn add axios
``` 


## Criando Classes 
Estrutura básica de um arquivo de classe:
```javascript 
import React, { Component } from 'react'; 

class NomeClasse extends Component { 
    render() {
        return (
            <h1> Teste </h1> 
        );
    }
}

export default NomeClasse;  
``` 

## Organizando as rotas 

```javascript
import React from 'react'; 
import {Switch, Route} from 'react-router-dom'; 

import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';

function Routes() {
    return (
        <Switch>
            <Route path="/pagina1" component={Pagina1} />
            <Route path="/pagina2" component={Pagina2} />
        </Switch>    
    );
}

export default Routes; 
``` 

## Componentes HTMLs

### Seleção 

Botão Dropdown para selecionar um item. 

```jsx
    <label htmlFor="selectDevices">Dispositivos:</label>
    <select className="form-control"  value={this.state.value} onChange={this.handleChangeDevices} id="selectDevices">
        {this.state.devices.map((device, index) => (
            <option value={index} key={index}>{device.name}</option>
        ))}
    </select>
``` 

## Rotas de Acesso, serivdor de teste

Todos os usuários 
* Login, http://teste.orivaiot.tk/login
* Registro de usuário, http://teste.orivaiot.tk/signup  
* Tela de acionamento do dispositivo IoT, http://teste.orivaiot.tk/

Usuário Administrador
* Cadastro de dispositivo, http://teste.orivaiot.tk/devices
* Cadastro de Autorizações, http://teste.orivaiot.tk/authorizations

Próximos passos: 
* Implementar as mensagens de interação com o sistema, como: 
 * Login realizado com sucesso; 
 * E-mail ou senha digitados incorretamente; 
 * Campo não pode ser vazio; 
 * Comando enviado com sucesso;
 * Dispositivos cadastrado co sucesso; 
 * Etc... 
* Implementar o perfil de acesso (usuário comum e administrador);
* Realizar testes mais intensos no sistema. 

# Referências 

1. RocketSeat Start, https://station.rocketseat.com.br
1. Semana OmniStack - Rocketseat, https://rocketseat.com.br/week-7/inscricao 
1. Controlando autenticação em rotas no ReactJS - Diego Fernandes, https://www.youtube.com/watch?v=sYe4r8WXGQg 
1. Iniciando com ReactJS: Navegação e Autenticação com JWT, 
 https://blog.rocketseat.com.br/reactjs-autenticacao/ 
1. JSON Web Token Authentication in React and react-router, https://hptechblogs.com/using-json-web-token-react/
1. React Authentication System Using JWT(JSON Web Tokens) and react-router,  https://www.youtube.com/watch?v=hjp-JHVsgxQ
1. React Bootstrap, https://react-bootstrap.github.io/getting-started/introduction
1. React Forms, https://reactjs.org/docs/forms.html
1. Redirecting in React, https://medium.com/@anneeb/redirecting-in-react-4de5e517354a
1. A BEAUTIFUL, RESPONSIVE, CUSTOMIZABLE, ACCESSIBLE (WAI-ARIA) REPLACEMENT FOR JAVASCRIPT'S POPUP BOXES, https://sweetalert2.github.io/