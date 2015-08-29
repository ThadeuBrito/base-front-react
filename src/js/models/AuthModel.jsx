import request from 'reqwest';

class AuthModel {

  login(email, password, success) {
    request({
      url: 'http://localhost:3001/auth/login',
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
