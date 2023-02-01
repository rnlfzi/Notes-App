import React from 'react';
import AppContext from '../context/AppContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Button = () => {
    const {locale, toggleLocale, theme, toggleTheme} = React.useContext(AppContext);

  return (
    <div className='btn-wrapper'>
        <button 
            className="btn opsi"
            onClick={toggleLocale}
        >
            {locale === 'id' ? 'En' : 'Id'}
        </button>
        <button 
            className="btn opsi"
            onClick={toggleTheme}
        >
            {theme === 'light' ? <FaMoon/> : <FaSun/>}
        </button>
    </div>
  )
}

export default Button;