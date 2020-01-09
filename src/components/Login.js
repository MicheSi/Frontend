import React, {useState} from 'react';
import axios from 'axios';
import bgImage from './farm.png';
import {useHistory} from 'react-router-dom';

const Login = props => {
    const initialState = {
        email: '',
        password: ''
    };

    const [user, setUser] = useState({initialState});

    let history = useHistory();

    const handleChanges = e => {
        setUser({...user, [e.target.name]: e.target.value});
        console.log(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        setUser(initialState);
        history.push('/farms');

        // axios
        // .get("https://bestfarm.herokuapp.com/api/users/user", user, {
        //     //headers:{  }
        // })
        // .then(res => {
        //     dispatch({type: LOGIN_SUCCESS, payload: res.data})
        // sessionStorage.setItem('token', res.data.payload)
        // .catch(err => console.error(err));
    }

    return (
        <div className='signinContainer'>
            <div className='imageContainer signinImg'>
                <img src={bgImage}/>
            </div>
            <div className='signinForm'>
            <h3 className='formHeading'>Sign in to account</h3>
            <form onSubmit={submitForm}>
            <label htmlFor='username'>Username</label>
                <input
                    required
                    id='username'
                    type='text'
                    name='username'
                    onChange={handleChanges}
                    value={user.username}
                />
            <label htmlFor='password'>Password</label>
                <input
                    required
                    id='password'
                    type='password'
                    name='password'
                    onChange={handleChanges}
                    value={user.password}
                />
            <button className='signinBtn' type='submit'>Sign In</button>
            </form>
            <p>Don't have an account? <a href='/register'>Create One</a></p>
            </div>
        </div>
    )

    
}

export default Login;
