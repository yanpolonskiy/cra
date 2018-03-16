import React, { Component } from 'react';
import Validation from './components/Validation/Validation.jsx';
import Char from './components/Char/Char.jsx';
import './App.css';

class App extends Component {
  state = {
    inputText: '',
  };
  inputListenterHandler = event => {
    this.setState({
      inputText: event.target.value,
    });
  };
  deleteCharHandler = (event, i) => {
    const text = [...this.state.inputText.split('')];
    text.splice(i, 1);
    this.setState({
      inputText: text.join(''),
    });
  };
  render() {
    const chars = (
      <div>
        {this.state.inputText.split('').map((char, i) => {
          return <Char char={char} key={i} delete={event => this.deleteCharHandler(event, i)} />;
        })}
      </div>
    );
    return (
      <div className="App">
        <input type="text" value={this.state.inputText} onChange={event => this.inputListenterHandler(event)} />
        <p>{this.state.inputText.length}</p>
        {chars}
        <Validation length={this.state.inputText.length} />
      </div>
    );
  }
}

export default App;
