import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Signin extends Component {
    handleFormSubmit({ email, password }) {
        console.log(email, password);
        // Log in User
    }
    render() {
        // handleSubmit, email and password from reduxForm
        const { handleSubmit, fields: { email, password }} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field name="email" component="input" className="form-control" />
                    <label>Password:</label>
                    <Field name="password" component="input" className="form-control" />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign In</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);