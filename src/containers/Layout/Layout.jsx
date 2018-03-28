import React from 'react';
import Aux from '../../hoc/Aux.jsx';

const layout = props => (
  <Aux>
    <div>Toolbar, SideDraw, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
