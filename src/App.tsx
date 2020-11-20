import React, { Component } from 'react';
import './App.css';
import Contador from './componentes/Contador'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contador valorInicial={9876} />
        <Contador />
      </div>
    );
  }
}

export default App;
