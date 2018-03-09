import React, { Component } from 'react';
// import Article from './components/Article.jsx';
import ArticleList from './components/ArticleList.jsx';
import './App.css';
import articles from './fake.json';

class App extends Component {
  render() {
    return <div className="container">
        <div className="row">
          <div className="col">
            <ArticleList articles={articles} />
            {/* <Article articles={articles[0]} /> */}
          </div>
        </div>
      </div>;
  }
}

export default App;
