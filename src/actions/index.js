import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password}) {
    return function(dispatch) {
        // redux thunk lets us return an action, which gives us direct access to dispatch


    // Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
    // If request is good...
    // - Update state to indicate user is auth'd
    // - Save the JWT token
    // - Redirect to route '/feature'

    // If request is bad...
    // - Show an error to user
    }
}