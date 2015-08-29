import request from 'reqwest';
import {HOST} from 'js/constants/BaseConstants'
import {PATH} from 'js/constants/AuthConstants'

class AuthModel {

  login(email, password, success) {
    request({
      url: `${HOST.URL}${PATH.LOGIN}`,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        email, password
      },
      success: function(response) {
        success(response.auth)
      },
      error: function() {
      }

    })
  }
}

export default new AuthModel()
