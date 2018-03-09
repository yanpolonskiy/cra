import React, { Component } from 'react';

class Articles extends Component {
  state = {
    isOpen: true,
  };
  render() {
    const { articles } = this.props;
    const body = this.state.isOpen && <section>{articles.body}</section>;
    const title = this.state.isOpen && <h1>{articles.title}</h1>;
    return (
      <div className="container">
        <div className="row">
          <div className="col">{title}</div>
        </div>
        <div className="row">
          <div className="col">{body}</div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={this.handleClick}>Get data</button>
          </div>
        </div>
      </div>
    );
  }
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
}
export default Articles;
