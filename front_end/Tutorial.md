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

