'use strict'

import React from 'react'

export default class Header extends React.Component {

  constructor() {
    super()
    this.state = {
      user: '',
      password: ''
    }
  }

  renderLoginButton() {
    if (false) {
      return <a className="button login-facebook" href={this.state.user}>Logar com o Face</a>
    }
  }

  renderAddPointButton() {
    if (true) {
      return (
        <div>
          <div className="hello-user">Oi, Thadeu Brito (sair)</div>
          <a className="button button-primary add-point" href="#">Adicionar ponto</a>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="twelve columns header">
        <div className="four columns">
          <div className="logo"/>
        </div>

        <div className="three columns header-middle">
          <div className="six columns">
            <div className="item-menu who-we-are">
              <a href="#">Quem somos</a>
            </div>
          </div>

          <div className="six columns">
            <div className="item-menu make-dog-home">
              <a href="#">Faça sua casinha</a>
            </div>
          </div>
        </div>

        <div className="five columns header-right">
          {this.renderLoginButton()}
          {this.renderAddPointButton()}
        </div>
      </div>
    )
  }
}
