import React from 'react';
import { NavLink } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui menu inverted">
            <NavLink to="/" exact className='item green' activeClassName="active">PFS</NavLink>
            <div className="right menu">
                <NavLink to="/characters" className="item pink" activeClassName="active">Characters</NavLink>
                <NavLink to="/scenarios" className="orange item" activeClassName="active">Scenarios</NavLink>
                <GoogleAuth />
            </div>
        </div>
    )
};

export default Header;