
import React, {Component, useState} from 'react'
import ES6 from '@mrmgomes/boleto-utils'

class Header extends Component {

  handleInput = e => {
    if(e.keyCode === 13){
      const valor = e.target.value
      console.log(ES6.validarBoleto(valor, 'LINHA_DIGITAVEL'))
    }
  }
  render() {
    return (
      <div className="App">
        <p> BOLETO </p>
        <input type="text" onKeyDown={(e) => this.handleInput(e)}></input>
      </div>
    );
  }
  
}

export default Header;
