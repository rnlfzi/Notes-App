import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import AppContext from '../context/AppContext';

const NoteInput = ({addNote}) => {
    const [title, onTitleChange] = useInput('');
    const [body, onBodyChange] = useInput('');
    const {locale} = React.useContext(AppContext);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await addNote({
            title: title,
            body: body
        })
    };

    return (
        <form className='add-new-page__input' onSubmit={ onSubmitHandler }>
                <input 
                    className="add-new-page__input__title" 
                    type="text" 
                    placeholder={locale === 'id' ? 'Judul' : "Title" }
                    value={ title } 
                    onChange={onTitleChange} 
                    
                />
                <textarea 
                    className="add-new-page__input__body" 
                    type="text" 
                    placeholder={locale === 'id' ? 'Isi' : "Body" }
                    value={ body } 
                    onChange={onBodyChange} 
                />
                <button className="btn__submit" type="submit">Submit</button>
        </form>
    )
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;