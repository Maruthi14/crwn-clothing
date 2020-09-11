import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {auth} from './firebase/firebase.utils'

import './App.css';
import Homepage  from './pages/homepage/homepage.component'
import Shoppage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import signInAndSignUp from './pages/sign-in-and-sign-up-page/sign_in_and_signup'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null
  componentDidMount(){
   this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/shop' component={Shoppage}></Route>
          <Route exact path='/signin' component={signInAndSignUp}></Route>
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
