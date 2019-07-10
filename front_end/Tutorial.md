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

# Referências 

1. RocketSeat Start, https://station.rocketseat.com.br
1. Semana OmniStack - Rocketseat, https://rocketseat.com.br/week-7/inscricao 
1. Controlando autenticação em rotas no ReactJS - Diego Fernandes, https://www.youtube.com/watch?v=sYe4r8WXGQg 
1. Iniciando com ReactJS: Navegação e Autenticação com JWT, 
 https://blog.rocketseat.com.br/reactjs-autenticacao/ 
1. JSON Web Token Authentication in React and react-router, https://hptechblogs.com/using-json-web-token-react/
1. React Authentication System Using JWT(JSON Web Tokens) and react-router,  https://www.youtube.com/watch?v=hjp-JHVsgxQ
1. React Bootstrap, https://react-bootstrap.github.io/getting-started/introduction