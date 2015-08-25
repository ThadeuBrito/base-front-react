'use strict'

import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div className="twelve columns header">
        <div className="logo columns"/>
        <span class>Quem somos</span>
        <span class>Faça sua casinha</span>
        <span class>Oi, Thadeu Brito (sair)</span>
        <a className="button button-primary add-point" href="#">Adicionar ponto</a>
      </div>
    )
  }
}

export default Header
