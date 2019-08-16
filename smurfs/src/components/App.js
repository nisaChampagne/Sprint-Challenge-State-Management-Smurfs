import React, { Component } from "react";
//components
import SmurfList from './smurfs/SmurfList'
import AddForm from './smurfs/AddForm'

//style
import "./App.css";


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='header'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        </div>
        <div className='smurfs'>
        <AddForm />
        <SmurfList />
        </div>
      </div>
    );
  }
}
export default App