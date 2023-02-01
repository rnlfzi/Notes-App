import React from 'react';
import NotesDetail from  '../components/NotesDetail';
import { useParams } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote, getActiveNotes } from '../utils/api';
import AppContext from '../context/AppContext';

const DetailPage = () => {
    const {id} = useParams();
    const [note, setNote] = React.useState(null);
    const {locale} = React.useContext(AppContext);

    React.useEffect(() => {
        getNote(id).then(({data}) => {
            setNote(data)
        })
      
        return () => {
            setNote(null)
        } 
    }, [id])

    const onDeleteHandler = async (id) => {
        await deleteNote(id);

        const {data} = await getActiveNotes();

        setNote(data)
    }

    const onArchivedHandler = async (id) => {
        await archiveNote(id);

        const {data} = await getActiveNotes();

        setNote(data)
    }

    const onUnarchivedHandler = async (id) => {
        await unarchiveNote(id);

        const {data} = await getActiveNotes();

        setNote(data)
    }

    return (
        <section>
            {note === null 
                ? <div className="note-item">
                    <div className="detail-page__title">
                        {locale === 'id' ? 'Tunggu...' : 'Loading...'}
                    </div>
                </div>

                : <NotesDetail 
                    {...note}
                    onDelete={onDeleteHandler} 
                    onArchive={onArchivedHandler} 
                    onUnarchived={onUnarchivedHandler}
                />
            }   
        </section>
    )
}

export default DetailPage;

