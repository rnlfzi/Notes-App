import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegisterInput from '../components/RegisterInput'
import AppContext from '../context/AppContext';
import { register } from '../utils/api';

const RegisterPage = () => {
    const navigate = useNavigate();
    const {locale} = React.useContext(AppContext);

    const onRegisterHandler = async (user) => {
        const {err} = await register(user);
        if(!err) {
            navigate('/')
        }
    }

    return (
        <section className="register-page">
            <h2>{locale === 'id' ? 'Yang penting di isi aja ...' : 'just fill it ...'}</h2>
            <RegisterInput register={onRegisterHandler}/>
            <p>{locale === 'id' ? 'Sudah punya akun?' : 'already have an account?'}
                <Link to='/'>{locale === 'id' ? 'Masuk' : 'Login'}</Link>
            </p>
        </section>
    )
}

export default RegisterPage;