
import React from 'react'

// Not ideal to use createFactory, but don't know how to use JSX to solve this
// Posted question at: https://gist.github.com/sebmarkbage/ae327f2eda03bf165261
import App from './components/app'

React.render(
  <App />,
  document.getElementById('main')
);
