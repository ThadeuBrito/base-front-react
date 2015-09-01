import request from 'reqwest';
import {HOST} from 'js/constants/BaseConstants'
import {PATH} from 'js/constants/PointConstants'

class PointModel {

  list(success) {
    request({
      url: `${HOST.URL}${PATH.LIST}`,
      method: 'GET',
      crossOrigin: true,
      type: 'json',
      headers: {
        'Authorization': localStorage.getItem('caomunitario_user')
      },
      data: {},
      success: function(response) {
        success(response.points)
      },
      error: function(response) {
      }

    })
  }
}

export default new PointModel()
