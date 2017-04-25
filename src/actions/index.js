import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password}) {
    return function(dispatch) {
        // redux thunk lets us return an action, which gives us direct access to dispatch
    // Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
        .then(response => {
        // If request is good...
        // - Update state to indicate user is auth'd
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token );
        // - Redirect to route '/feature'
        browserHistory.push('/feature');
        })
        .catch(() => {
        // If request is bad...
        // - Show an error to user
        dispatch(authError('Bad Login Info'));
        });
    }
}

export function signupUser({ email, password}) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/feature');
            })
            .catch(({response}) => dispatch(authError(response.data.error)));
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    // Get rid of token set inside local state
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER
    }
}

export function fetchMessage() {
    return function(dispatch) {
        axios.get(ROOT_URL, { 
            headers: { authorization: localStorage.getItem('token') }
        })
            .then(response => {
                console.log(response);
            })
    }
}