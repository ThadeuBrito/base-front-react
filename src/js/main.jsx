'use strict'

import React from 'react'
import Router, {Route, NotFoundRoute, DefaultRoute} from 'react-router'
import RouterContainer from 'js/utils/RouterContainer'

import LoginHandler from 'js/components/login/LoginHandler'
import HomeHandler from 'js/components/home/HomeHandler'
import PageNotFound from 'js/components/pages/NotFound'

import 'sass/global'

var routes = (
  <Route>
    <DefaultRoute handler={HomeHandler} />
    <Route name="login" handler={LoginHandler}/>
    <NotFoundRoute handler={PageNotFound} />
  </Route>
);

var router = Router.create({routes})
RouterContainer.set(router)

router.run(function (Handler) {
  React.render( <Handler />, document.getElementById('container') )
})
