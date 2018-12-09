import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import A from './middleComponent'
import C from './C'

class App extends Component {
  constructor(){
    super();
    this.state = {color:"white"};
  }

  newColor(newColor)
  {
    //console.log(newColor);
      this.setState({
        color:newColor
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <C color={this.state.color}/>
        <A color={this.state.color}  parentColor={this.newColor.bind(this)}/>
      </div>
    );
  }
}


 

export default App;
