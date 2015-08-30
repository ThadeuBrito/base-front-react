'use strict'

import React from 'react'
import AuthActions from 'js/actions/AuthActions'
import AuthStore from 'js/stores/AuthStore'

export default class Header extends React.Component {

  constructor() {
    super()
    this.state = this._getAuthState();
  }

  _getAuthState() {
    return {
      user: AuthStore.user
    };
  }

  _onChange() {
     this.setState(this._getAuthState());
  }

  componentDidMount() {
    AuthStore.addChangeListener(this._onChange.bind(this));
  }

  renderLoginButton() {
  if (!AuthStore.isLoggedIn()) {
      return (
        <div>
          <a className="button login-facebook" onClick={this.login.bind(this)}>Logar com o Face</a>
        </div>
      )
    }
  }

  renderAddPointButton() {
    if (AuthStore.isLoggedIn())
      return ( <a className="button button-primary add-point" href="#">Adicionar ponto</a> )
  }

  renderUserInformation() {
    if (AuthStore.isLoggedIn())
      return <div className="hello-user">Oi, {AuthStore.user.first_name} (<a href='#' onClick={this.logout}>sair</a>)</div>
  }

  login() {
    AuthActions.login('example@dominio.com', '123456');
  }

  logout() {
    AuthActions.logout()
  }

  render() {
    return (
      <div className="row">
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
            <div>
              {this.renderUserInformation()}
              {this.renderAddPointButton()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
