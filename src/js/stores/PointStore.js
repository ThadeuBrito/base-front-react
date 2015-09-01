import {POINT_LIST, POINT_CREATE} from 'js/constants/PointConstants'
import BaseStore from 'js/stores/BaseStore'

class PointStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))

    this._points = null
  }

  _registerToActions(action) {
    switch(action.actionType) {

      case POINT_LIST:
        this._points = action.points
        this.emitChange();
        break;

      case POINT_CREATE:
        this._points = null;
        this.emitChange();
        break;

      default:
        break;
    };
  }

  get points() {
    return this._points;
  }

}

export default new PointStore();
