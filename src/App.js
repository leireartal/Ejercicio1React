import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Leire'
  }

//Metodo para manipular el estado**********
switchUserNameHandler = (event) => {
  this.setState( {
    username: event.target.value
  } )
}
//----------------------------------------

  render() {
    return (
     
      <div className="App">
       <head>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
          
       </head>
       <h1>Primera tarea de REACT</h1>
        {/* 1 componente UserInput */}
       <UserInput changed={this.switchUserNameHandler}></UserInput>
       {/* <UserInput></UserInput> */}
        {/* 2 componentes UserOutput */}
       <UserOutput username='Ana'>Mi nombre es siempre Ana</UserOutput>
       <UserOutput username={this.state.username} >Para cambiar mi nombre utiliza el input</UserOutput>
     
      </div>
    );
  }
}

export default App;
