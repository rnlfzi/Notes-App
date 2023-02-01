import React from 'react';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import DetailPage from './pages/DetailPage';
import ArchievePage from './pages/ArchievePage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/api';
import AppContext from './context/AppContext';
import Button from './components/Button';

const App = () => {
    const [user, setUser] = React.useState(null);
    const [initializing, setInitializing] = React.useState(true);
    const [locale, setLocale] = React.useState(() => {
        return localStorage.getItem('locale') || 'id'
    });
    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem('theme') || 'light'
    });

    React.useEffect(() => {
        getUserLogged().then(({data}) => {
            setUser(data)

            setInitializing(false)
        })
        
    },[setInitializing])

    React.useEffect((prevTheme) => {
        if(prevTheme !== theme) {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, [theme])

    const onLoginSuccess = async ({accessToken}) => {
        putAccessToken(accessToken);

        getUserLogged().then(({data}) => {
            setUser(data)
        })
    }

    const onLogout = () => {
        setUser(null);

        putAccessToken('');
    }

    const toggleLocale = () => {
        setLocale((prevLocale) => {
            const newLocale = prevLocale === 'id' ? 'en' : 'id';

            localStorage.setItem('locale', newLocale);
            return newLocale
        })
    }

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme =  prevTheme === 'light' ? 'dark' : 'light';

            localStorage.setItem('theme', newTheme);
            return newTheme
        })
    }

    const ContextValue = React.useMemo(() => {
      return {
        locale,
        toggleLocale,
        theme,
        toggleTheme
      }
    }, [locale, theme])


    if(initializing) {
        return null
    }

    return(
        <AppContext.Provider value={ContextValue}>
            <div className='app-container'>
                { user === null 
                    ? (
                        <div>
                            <header className="note-app__header">
                                <h1>{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</h1>
                            </header>
                            <main>
                                <Routes>
                                    <Route path='/*' element={<LoginPage loginSuccess={onLoginSuccess}/>} />
                                    <Route path='/register' element={<RegisterPage/>} />
                                </Routes>
                            </main>
                        </div>
                    ) 
                    : (
                        <div>
                            <header className="note-app__header">
                                <h1>{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</h1>
                                <Navigation logout={onLogout}/>
                            </header>
                            <main>
                                <Routes>
                                    <Route path='/' element={ <HomePage/> } />
                                    <Route path='/add' element={ <AddPage/> } />
                                    <Route path='/notes/:id' element={ <DetailPage/> } />
                                    <Route path='/archive' element={ <ArchievePage/> } />
                                    <Route path='*' element={ <NotFoundPage/> } />
                                </Routes>
                                <Button/>
                            </main>
                        </div>
                    )
                }
            </div>
        </AppContext.Provider>
    )
}

export default App;


