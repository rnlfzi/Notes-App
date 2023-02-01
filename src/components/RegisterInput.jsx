import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import AppContext from '../context/AppContext';

const RegisterInput = ({register}) => {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const {locale} = React.useContext(AppContext);

    const onSubmitHandler = async () => {
        await register({
            name: name,
            email: email,
            password: password
        })
    }

    return (
        <form onSubmit={onSubmitHandler} className="input-register">
            <input 
                type="text" 
                placeholder='Nama'
                value={name}
                onChange={onNameChange}
            />
            <input 
                type="email" 
                placeholder='Email'
                value={email}
                onChange={onEmailChange}
            />
            <input 
                type="password" 
                placeholder='Password'
                value={password}
                onChange={onPasswordChange}
            />
            <button type='submit'>{locale === 'id' ? 'Daftar' : 'Register' }</button>
        </form>
    )
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;