import {AUTH_LOGIN, AUTH_LOGOUT} from 'js/constants/AuthConstants'
import BaseStore from 'js/stores/BaseStore'
import JWT from 'jsonwebtoken'

class AuthStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))

    let jwt = JWT.decode(localStorage.getItem('caomunitario_user'))
    this._user = null || jwt
  }

  _registerToActions(action) {
    switch(action.actionType) {

      case AUTH_LOGIN:
        this._jwt = action.jwt;
        this._user = JWT.decode(this._jwt);
        this.emitChange();
        break;

      case AUTH_LOGOUT:
        this._user = null;
        this.emitChange();
        break;

      default:
        break;
    };
  }

  get user() {
    return this._user;
  }

  get jwt() {
    return this._jwt;
  }

  isLoggedIn() {
    return !!this._user;
  }
}

export default new AuthStore();
