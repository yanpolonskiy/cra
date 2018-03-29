import React, { Component } from 'react';
import Layout from '../components/Layout/Layout.jsx';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder.jsx';
import Aux from '../hoc/Aux.jsx';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </Aux>
    );
  }
}

export default App;
