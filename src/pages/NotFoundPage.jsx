import React from 'react';
import AppContext from '../context/AppContext';

const NotFoundPage = () => {
    const {locale} = React.useContext(AppContext);
    const mystyle = {
        fontSize: '75px'
    }
    return (
        <div style={mystyle}>{locale === 'id' ? 'Halaman tidak ditemukan' : 'Not Found Page 404'}</div>
    )
}

export default NotFoundPage;