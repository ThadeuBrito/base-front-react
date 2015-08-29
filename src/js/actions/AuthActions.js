
import AppDispatcher from 'js/dispatchers/AppDispatcher.js'
import {AUTH_LOGIN, AUTH_LOGOUT} from 'js/constants/AuthConstants.js'
import Auth from 'js/models/AuthModel'

export default {
  login(email, password) {
    Auth.login(email, password, function(auth) {
      localStorage.setItem('caomunitario_user', auth.jwt);

      AppDispatcher.dispatch({
        actionType: AUTH_LOGIN,
        jwt: auth.jwt
      });
    })
  },

  logout() {
    localStorage.removeItem('caomunitario_user');

    AppDispatcher.dispatch({
      actionType: AUTH_LOGOUT
    });
  }
}
