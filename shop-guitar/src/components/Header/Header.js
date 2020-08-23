import React, { Component } from 'react';
import MenuHeader from './MenuHeader/MenuHeader';
import MenuNav from './MenuNav/MenuNav';

class Header extends Component {
    render() {
        return (
            <div>
                <MenuHeader/>
                { window.location.pathname === "/login" || window.location.pathname === "/signup" ? (<div></div>) : (<MenuNav/>) }
            </div>
        );
    }
}

export default Header;