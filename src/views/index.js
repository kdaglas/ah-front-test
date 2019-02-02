
import React, { Component } from 'react'
import '../assets/vendor/nucleo/css/nucleo.css'
import  '../assets/vendor/font-awesome/css/font-awesome.min.css'
import '../assets/css/argon.min.css'

class App extends Component {
    render() {
      return (
          <h1>
          {this.props.auth.name}
          </h1>
      );
    }
  }

export default App