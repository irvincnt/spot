import React, { Component } from 'react'

class login extends Component {
  render () {
    return (
      <div className='wrapper'>
        <div className='container'>
          <h1>Registrate</h1>

          <form className='form'>
            <input type='text' placeholder='Email o número telefónico' />
            <button type='submit' id='login-button'>Login</button>
          </form>
        </div>
        
        <ul className='bg-bubbles'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default login
