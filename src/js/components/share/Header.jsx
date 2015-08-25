'use strict'

import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div className="twelve columns header">
        <div className="three columns">
          <div className="logo"/>
        </div>

        <div className="two columns">
          <div className="item-menu who-we-are">
            <a href="#">Quem somos</a>
          </div>
        </div>

        <div className="two columns">
          <div className="item-menu make-dog-home">
            <a href="#">Faça sua casinha</a>
          </div>
        </div>

        <div className="two columns">
          <div className="hello-user">Oi, Thadeu Brito (sair)</div>
        </div>

        <div className="three columns">
          <a className="button button-primary add-point" href="#">Adicionar ponto</a>
        </div>
      </div>
    )
  }
}

export default Header
