import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { IxnButton, IxnButtonComp } from './IxnButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Components List</h1>
          <hr/>
          <p>
            Simple demonstration of overriding strategies using <a href="https://github.com/reactstrap/reactstrap" target="_blank" rel="noopener noreferrer">reactstrap</a>.
          </p>
          <Button color="primary" onClick={e => {
              alert("This is a simple onClick callback defined by reactstrap button component");
          }}>Bootstrap Button</Button>
          <br/>
          <br/>
          <p>Note the CSS overrides below as well. We are demonstrating the ability to override / append to both prop styles (using classes and styles) <i>and</i> prop functions (such as callback functions)</p>
          <IxnButton color="primary" className="btn-lg" onClick={e => {
            alert("This runs after a function wrapper calls it within IxnButton")
          }}>Ixn Button</IxnButton>
          <br/>
          <br/>
          <IxnButtonComp
            color="primary"
            className="btn-lg"
            onClick={e => {
                alert("This runs after a function wrapper calls it within IxnButtonComp")
            }} style={{'borderColor': 'pink'}}>Ixn Button 3</IxnButtonComp>
        </header>
      </div>
    );
  }
}

export default App;
