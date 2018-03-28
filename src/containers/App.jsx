import React, { Component } from 'react';
import Layout from './Layout/Layout.jsx';
import Aux from '../hoc/Aux.jsx';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <p>Test</p>
        </Layout>
      </Aux>
    );
  }
}

export default App;
