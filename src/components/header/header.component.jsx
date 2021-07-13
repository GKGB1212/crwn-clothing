import React from 'react';
import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/nike.svg';

import './header.styles.scss';

const Header=({currentUser})=>(
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
                <div className='option' onClick={()=> auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/signIn'>
                SIGN IN
                </Link>
            }
        </div>
    </div>
)

export default Header;