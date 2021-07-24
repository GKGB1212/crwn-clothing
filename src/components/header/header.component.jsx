import React from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {auth} from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/nike.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header=({currentUser,hidden})=>(
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                //nếu currentUser là 1 object thì sẽ return về true
                currentUser ?
                <div className='option' onClick={()=> (auth.signOut())}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/signIn'>
                SIGN IN
                </Link>
            }
            <CartIcon/>
        </div>
        {
            hidden?
            null:
            <Cart/>
        }
    </div>
)

//mapStateToProps: giúp chuyển state trong store sang thành props sử dụng trong component.
// const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) =>{
//     console.log('im there olall');
//     return({
//     currentUser,
//     hidden
// })}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);