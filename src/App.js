import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage1 from './pages/homepage-component/homepage.component';
import ShopPage from './pages/shoppage/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage1} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
