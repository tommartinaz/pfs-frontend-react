import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui menu inverted">
            <NavLink to="/" exact className='item green' activeClassName="active">PFS</NavLink>
            <div className="right menu">
                <NavLink to="/characters" className="item pink" activeClassName="active">Characters</NavLink>
                <NavLink to="/scenarios" className="orange item" activeClassName="active">Scenarios</NavLink>
            </div>
        </div>
    )
};

export default Header;