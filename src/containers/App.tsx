import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from 'globalStyles';

import Home from 'containers/Home';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
