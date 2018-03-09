import React, { Component } from 'react';

class Articles extends Component {
  state = {
    isOpen: true,
  };
  render() {
    const { articles } = this.props;
    const body = this.state.isOpen && <section className="card-text">{articles.body}</section>;
    const title = this.state.isOpen && <h3>{articles.title}</h3>;
    return (
      <div className="card mx-auto" style={{ width: '50%' }}>
        <div className="card-header">
          <div className="col">
            {title}
            <button className="btn btn-primary btn-lg float-right" onClick={this.handleClick}>
              Hide
            </button>
          </div>
        </div>
        <div className="card-body">{body}</div>
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
