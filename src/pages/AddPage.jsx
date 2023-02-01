import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/api';
import AppContext from '../context/AppContext';

const AddPage = () => {
    const navigate = useNavigate();
    const {locale} = React.useContext(AppContext)

    const onAddNotesHandler = async (note) => {
        await addNote(note);

        navigate('/')
    }
    
    return (
        <section>
            <h2>{locale === 'id' ? 'Tambahkan Catatan' : 'Add Note'}</h2>
            <NoteInput addNote={onAddNotesHandler} />
        </section>
    )
}

export default AddPage;
