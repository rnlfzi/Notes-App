import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdNoteAdd } from 'react-icons/md';
import { HiHome } from 'react-icons/hi2';
import { HiInboxIn } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';

const Navigation = ({logout}) => {
    return (
        <div>
            <nav className='navigation'>
                <ul>
                    <li><Link to='/'><HiHome/></Link></li>
                    <li><Link to='/add'><MdNoteAdd/></Link></li>
                    <li><Link to='/archive'><HiInboxIn/></Link></li>
                    <li><button onClick={logout}><FiLogOut /></button></li>
                </ul>
            </nav>
        </div>
    )
}
Navigation.propTypes = {
    logout: PropTypes.func.isRequired
}

export default Navigation;
