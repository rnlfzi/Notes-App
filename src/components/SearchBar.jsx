import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

const SearchBar = ({ keyword, keywordChange }) => {
    const {locale} = React.useContext(AppContext);
    
    return (
        <div className='search-bar'>
            <input 
                type='text' 
                className='search-bar'
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
                placeholder={locale === 'id' ? 'Cari berdasarkan Judul Catatan' : 'Search by Note Title'}
            />
        </div>
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;