import AppDispatcher from 'js/dispatchers/AppDispatcher.js'
import {POINT_LIST, POINT_CREATE} from 'js/constants/PointConstants'
import Point from 'js/models/PointModel'

export default {
  list() {
    Point.list(function(points) {
      AppDispatcher.dispatch({
        actionType: POINT_LIST,
        points: points
      });
    })
  }
}
