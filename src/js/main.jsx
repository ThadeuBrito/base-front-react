'use strict'

import React from 'react'
import Router, {Route} from 'react-router'
import RouterContainer from 'js/utils/RouterContainer'

import LoginHandler from 'js/components/login/LoginHandler'
import HomeHandler from 'js/components/home/HomeHandler'

import 'sass/global'

var routes = (
  <Route handler={HomeHandler} path="/">
    <Route name="login" handler={LoginHandler}/>
  </Route>
);

var router = Router.create({routes})
RouterContainer.set(router)

router.run(function (Handler) {
  React.render( <Handler />, document.getElementById('main') )
})
