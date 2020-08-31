import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routing';
import ReactNotification from 'react-notifications-component'

import 'react-notifications-component/dist/theme.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ReactNotification />
          <Routing/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;