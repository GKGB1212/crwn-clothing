import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage1 from './pages/homepage-component/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage1} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
