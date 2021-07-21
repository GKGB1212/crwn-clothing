import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage1 from './pages/homepage-component/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth} from './firebase/firebase.utils';
import {createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    //sử dụng onAuthStateChanged để lắng nghe trạng thái hiện tại của user.
    //firebase.auth.Auth.onAuthStateChanged to receive sign in state changes.
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      createUserProfileDocument(userAuth);
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);

        //??????????????????????????????????????
        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      //nếu đăng xuất thì set lại cho bằng rỗng
      this.setState({currentUser:userAuth});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage1} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
