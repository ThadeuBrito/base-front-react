import AppDispatcher from 'js/dispatchers/AppDispatcher.js'
import {SIDEBAR_OPEN, SIDEBAR_CLOSE} from 'js/constants/SideBarConstants'

export default {
  open(component) {
    AppDispatcher.dispatch({
      actionType: SIDEBAR_OPEN,
      component: component
    });
  },

  close() {
    AppDispatcher.dispatch({
      actionType: SIDEBAR_CLOSE
    });
  }

}
