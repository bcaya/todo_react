import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
class App extends Component {
  state = {
    flashCards: [
      {id: 1, question:"What is a state?", answer:"State is a plain javascript object that we can store properties in. When the value of state changes render will be called."},
      {id: 2, question:"What is Composability and why is it helpful? ", answer:"It is when objects can function on their own as they do not have dependencies. This allows you to have components that work independently"},
      {id: 3, question:"What is 1 way data flow", answer:"I willfind out"},
      {id: 4, question:"What is a 'Prop'? ", answer:"Props are properties that can be passed down from parent to child"},
      {id: 5, question:"template question", answer:"template answer"},
      {id: 6, question:"question sadlfkjas", answer:"template answer."},
    ]
  }
  render() {
    const { flashCards } = this.state 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FlashCards!</h1>
        </header>
          <List card="FlashCards" cards={flashCards}/>>
  
          <button>Flipcard</button>
           
      </div>
    );
  }
}

export default App;

