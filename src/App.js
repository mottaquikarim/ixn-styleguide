import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { IxnButton, IxnButton2, IxnButton3 } from './IxnButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Components List</h1>
          <hr/>
          <Button color="primary">Bootstrap Button</Button>
          <br/>
          <br/>
          <IxnButton color="primary" className="btn-lg" onClick={e => {
            console.log(e, this) 
          }}>Ixn Button</IxnButton>
          <br/>
          <br/>
          <IxnButton2 color="primary" className="btn-lg" onClick={e => alert(2)}>Ixn Button2</IxnButton2>
          <br/>
          <br/>
          <IxnButton3 color="primary" className="btn-lg" onClick={e => alert(2)} style={{'border-color': 'pink'}}>Ixn Button 3</IxnButton3>
        </header>
      </div>
    );
  }
}

export default App;
