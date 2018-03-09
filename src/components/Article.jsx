import React, { PureComponent } from 'react';

class Articles extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.defaultOpen,
      count: 0,
    };
  }

  componentWillMount() {
    console.log('component will mount');
  }
  componentDidMount() {
    console.log('component did mount');
  }
  componentWillUpdate() {
    console.log('component will update');
  }
  componentDidUpdate() {
    console.log('component did update');
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultOpen !== this.props.defaultOpen) {
      this.setState({
        isOpen: nextProps.defaultOpen,
      });
    }
  }

  render() {
    const { articles } = this.props;
    const body = this.state.isOpen && <section className="card-text">{articles.body}</section>;
    return (
      <div className="card mx-auto" style={{ width: '50%' }}>
        <div className="card-header">
          <div className="col">
            <h2 onClick={this.titleCounter}>{articles.title}</h2>
            <p>Count: {this.state.count}</p>
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
  titleCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };
}
export default Articles;
