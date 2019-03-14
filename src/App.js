import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from './Components/Blog';
import Info from './Components/Info';
import Nav from './Components/Nav';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Nav />
          </div>
          <Route exact path="/" component={Info} />
          <Route path="/blog" component={Blog} />
        </div>
      </Router>
    );
  }
}

export default App;
