import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import QACode from './pages/card-qrcode'
import Login from './pages/login'

class App extends Component {
  render () {
    return (
      <div>
        <QACode />
        {/* <Login /> */}
      </div>
    )
  }
}

export default App
