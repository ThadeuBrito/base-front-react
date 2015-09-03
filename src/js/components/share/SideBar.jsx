'use strict'

import React from 'react'

import SideBarStore from 'js/stores/SideBarStore'
import SideBarActions from 'js/actions/SideBarActions'

import 'sass/share/SideBar'

export default class SideBar extends React.Component {

  constructor() {
    super()
    this.state = this._getInitialState();
  }

  _getInitialState() {
    return {
      opened: SideBarStore.isItOpened,
      component: SideBarStore.componentContent
    };
  }

  _onChange() {
     this.setState(this._getInitialState());
  }

  componentDidMount() {
    SideBarStore.addChangeListener(this._onChange.bind(this));
  }

  close() {
    SideBarActions.close()
  }

  renderSideBar() {
    if (this.state.opened) {
      return (
        <div id="side-bar">
          <a onClick={this.close}>close</a>
          {this.state.component()}
        </div>
      )
    }
  }

  render() {
    return (
      <div>{this.renderSideBar()}</div>
    )
  }
}
