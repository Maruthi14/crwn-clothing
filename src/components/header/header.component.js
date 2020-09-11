import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'

import './header.styles.scss'
import { ReactComponent as Logo} from '../../assets/crown.svg'

const Header =({currentUser}) =>(

    <div className = 'header'>
        <Link className='logo-container' to='/' >
            <Logo className='logo'></Logo>
        </Link>

    
    <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to ='/contact'>CONTACT</Link>
        {
            currentUser ? 
            <div className='option' onClick={auth.signOut}>SIGNOUT</div>
            :
            <Link className='option' to='/signin'>SIGNIN </Link>
        }

    </div>
    </div> 
)

export default Header