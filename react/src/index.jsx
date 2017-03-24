import React from 'react';
import ReactDOM from 'react-dom';

import Nav from '../src/nav.js'
import Home from './home.jsx'
import AddRecipe from './components/addRecipe.jsx';
import Login from './components/login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (<div>
      <Nav />
      <Home /> 
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// NOTE TO SELF: 
// To start, run from terminal the following...
// npm run react-dev
// npm run server-dev

