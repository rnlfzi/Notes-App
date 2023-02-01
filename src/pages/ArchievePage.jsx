import React from 'react';
import NotedList from '../components/NotedList';
import { getArchivedNotes } from '../utils/api';
import AppContext from '../context/AppContext';

const ArchievePage = () => {
    const [notes, setNotes] = React.useState([]);
    const {locale} = React.useContext(AppContext)

    React.useEffect(() => {
        getArchivedNotes().then(({data}) => {
            setNotes(data)
        })

        return (
            setNotes([])
        )
   
    }, [])

    return (
        <section>
            <h2>{locale === 'id' ? 'Daftar Arsip Catatan' : 'Archived Noted List'}</h2>
            {notes.length === 0 
                ? <div className="notes-list-empty">
                    <p>{locale === 'id' ? 'Tidak ada Catatan!!!' : 'No Notes Found!!!'}</p>
                </div>
                : <NotedList notes={notes} />
            }
        </section>
    )
}

export default ArchievePage;

