import React from 'react';

import 'normalize.css';
import '../style/main.scss';

const DefaultLayout = props => (
  <div className="wrapper">
    {props.children()}
  </div>
);

export default DefaultLayout