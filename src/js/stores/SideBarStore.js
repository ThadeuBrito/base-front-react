import {SIDEBAR_OPEN, SIDEBAR_CLOSE} from 'js/constants/SideBarConstants'
import BaseStore from 'js/stores/BaseStore'

class SideBarStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))

    this._opened = false
  }

  _registerToActions(action) {
    switch(action.actionType) {

      case SIDEBAR_OPEN:
        this._opened = true
        this._component = action.component
        this.emitChange();
        break;

      case SIDEBAR_CLOSE:
        this._opened = false
        this.emitChange();
        break;

      default:
        break;
    };
  }

  get isItOpened() {
    return this._opened;
  }

  get componentContent() {
    return this._component
  }

}

export default new SideBarStore();
