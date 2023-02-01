import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NotedList from '../components/NotedList';
import SearchBar from '../components/SearchBar';
import AppContext from '../context/AppContext';
import { getActiveNotes } from '../utils/api';

const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });
    const {locale} = React.useContext(AppContext)

    React.useEffect(() => {
        getActiveNotes().then(({data}) => {
            setNotes(data);
        })

        return () => {
            setNotes([]);
        }
    
    }, [])

    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword);

        setSearchParams({keyword})
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(
            keyword.toLowerCase()
        )
    })

    if(notes.length === 0) {
        return (
            <div className="notes-list-empty">
                <p>{locale === 'id' 
                    ? 'Tunggu...' 
                    : 'Loading...'}
                </p>
            </div>
        )
    }

    return (
        <section>
            <h2>{locale === 'id' ? 'Daftar Catatan Aktif' : 'Active Note List'}</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            {filteredNotes.length === 0 
                ? <div className="notes-list-empty">
                    <p>{locale === 'id' 
                        ? 'Catatan tidak ditemukan!!!' 
                        : 'Note is not found'}
                    </p>
                </div>
                : <NotedList notes={filteredNotes}/>
            }
        </section>
    )
}

export default HomePage;
