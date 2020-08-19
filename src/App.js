import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';
import Homepage  from './pages/homepage/homepage.component'
import Shoppage from './pages/shop/shop.component'
import Header from './components/header/header.component'

function App() {
  return (
    <div >
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/shop' component={Shoppage}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
