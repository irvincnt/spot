import React, { Component } from 'react'
import '../App.css'
import QRCodeSnippet from 'qrcode.react'

class QRCode extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showData: false
    }
  }

  showData () {
    this.setState({showData: true})
  }

  render () {
    return (
      <div>
        <div className='page'>
          <div className='boarding-pass full'>
            <div className='hero'>
              <p className='departure'>
                <strong></strong>
                <span></span>
              </p>
              <p className='destination'>
                <strong></strong>
                <span></span>
              </p>
            </div>
            <div className='boardcard'>
              <div className='card'>
                <div className='front'>
                  <div className='flight-info'>
                    { this.state.showData && <div>
                      <div className='row'>
                        <p className='col-50'>
                          <label>Fecha</label>
                          <span>9 Sep 2018</span>
                        </p>
                        <p className='col-50'>
                          <label>Cantidad</label>
                          <span>$1.00</span>
                        </p>
                      </div>
                      <div className='row'>
                        <p className='col-50'>
                          <label>OT:</label>
                          <span>0001</span>
                        </p>
                        <p className='col-50 gate'>
                          <label>Banco</label>
                          <span>Bancomer</span>
                        </p>
                      </div>
                    </div>
                    }
                  </div>
                  <div className='scanner'>
                    {this.state.showData && <QRCodeSnippet value='{
                        "ot": "0001",
                        "dOp": [
                        {"alias": "Tacos"},
                        {"cl": "012813026886533219"},
                        {"type": "CL"},
                        {"refn": ""},
                        {"refa": "Martin Granados Garcia"},
                        {"amount": "1.00"},
                        {"bank": "00012"},
                        {"country": "MX"},
                        {"currency": "MXN"} ]
                      }'
                    />}
                  </div>
                  <div className='row'>
                    { this.state.showData && <p className='col-75 passenger'>
                      <label>Referencia</label>
                      <span>Martin Granados Garcia</span>
                    </p>
                    }
                  </div>
                </div>
                <div className='back'>
                  <p>
                      There could be a lot of additional information we could display here:
                  </p>
                  <ul>
                    <li>boarding time?</li>
                    <li>Flight duration Time</li>
                    <li>Stops / next leg?</li>
                    <li>Landing time</li>
                  </ul>
                  <p className='disclaimer'>Well, yes and all required disclaimers. Should be enough space for that too.</p>
                  <p className='hotline'>Need Help? Call 0800 01 01 01</p>
                </div>
              </div>
            </div>
            <div style={{textAlign: 'center'}}>
              <form action='your-server-side-code' method='POST' heidth='200px' style={{heidth: '200px'}}>
                <script
                  src='https://checkout.stripe.com/checkout.js' class='stripe-button'
                  data-key='pk_test_VniGdvrGKO0Gbmz6hnGAxOpC'
                  data-amount='999'
                  data-name='Deep Talks'
                  data-description='Widget'
                  data-image='https://stripe.com/img/documentation/checkout/marketplace.png'
                  data-locale='auto'
                  data-currency='mxn' />
              </form>
              <a className='paypal-button' href='https://www.paypal.me/elmgranados/1.00' target='_blank'>
                <span className='paypal-button-title'>
                  pagar con 
                </span>
                <span className='paypal-logo'>
                  <i> Pay</i><i>Pal</i>
                </span>
              </a>
              <button className='bb-button' onClick={() => this.showData()}>
                <span className='bb-button-title'>
                  pagar con Bancomer
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QRCode
