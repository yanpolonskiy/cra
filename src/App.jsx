import React, { Component } from 'react';
import ArticleList from './components/ArticleList';
import 'bootstrap/dist/css/bootstrap.css';
import articles from './fake.json';

class App extends Component {
  state = {
    reverted: false,
  };
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="display-3">App Name</div>
          <button className="btn btn-primary" onClick={this.revert}>Revert</button>
        </div>
        <div>
          <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
        </div>
      </div>
    );
  }
  revert = () =>
    this.setState({
      reverted: !this.state.reverted,
    });
}

export default App;
