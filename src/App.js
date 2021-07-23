import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage1 from './pages/homepage-component/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

import {auth,createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth=null;

  componentDidMount(){
    //sử dụng onAuthStateChanged để lắng nghe trạng thái hiện tại của user.
    //firebase.auth.Auth.onAuthStateChanged to receive sign in state changes.
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      createUserProfileDocument(userAuth);
      const {setCurrentUser_inApp}=this.props;

      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        //??????????????????????????????????????
        userRef.onSnapshot(snapShot=>{
        setCurrentUser_inApp({
              id:snapShot.id,
              ...snapShot.data()
            })
        });
      }
      //nếu đăng xuất thì set lại cho bằng rỗng
      setCurrentUser_inApp(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage1} />
          <Route path='/shop' component={ShopPage} />
          <Route 
            exact 
            path='/signIn' 
            render={()=>
              this.props.currentUser ? (
              <Redirect to='/'/>
            ):(
              <SignInAndSignUpPage/>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({user}) =>({
  currentUser:user.currentUser
})

const mapDispatchToProps=dispatch=>({
  setCurrentUser_inApp: user=> dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);

