'use strict';
import React from 'react';
import { render } from 'react-dom';

const App = React.createClass({
  render() {
    return (
//      <section>
	<div>
        	<h1>My scaffold</h1>
        	<p>Hello world</p>
	</div>
      // </section>
    );
  }
});

render (
  <App />,
    document.getElementById('container')
);


