import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './Home/Header';
import Footer from './Home/Footer';
import Home from './Home';
// import { defineConfig } from 'umi';
import Page2 from './Page2';

// import {
//   Nav00DataSource,
//   Footer00DataSource,
// } from './Home/data.source.js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <Router>
        <div>
          {/* <Header isMobile={this.isMobile}/> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/page2" component={Page2} />
          {/* <Footer isMobile={this.isMobile}/> */}
        </div>
      </Router>
    );
  }
}

export default App;