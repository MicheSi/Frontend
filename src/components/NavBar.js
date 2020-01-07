import React from 'react';

const NavBar = props => {
    return (
        <nav>
            <a href='/'><i class="fas fa-tractor"> Farm Fresh</i></a>
            <a href=''>Shop</a>
            <a href=''>Farms</a>
            <a href=''>Account</a>
            <a href=''>Search</a>
            <a href=''><i class="fas fa-shopping-cart"></i></a>
            <a href='/sign-in'>Sign In</a>
            <button className='sellBtn'><a href=''>Click Here to Sell</a></button>
        </nav>
    )
}

export default NavBar;