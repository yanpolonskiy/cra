import React, { Component } from 'react';
import ArticleList from './components/ArticleList';
import 'bootstrap/dist/css/bootstrap.css';
import articles from './fake.json';

class App extends Component {
  render() {
    return <div className="container">
        <div className="jumbotron">
          <div className="display-3">App Name</div>
        </div>
        <div>
          <ArticleList articles={articles} />
        </div>
      </div>;
  }
}

export default App;
