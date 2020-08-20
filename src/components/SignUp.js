import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const SignUp = () => {

    const [user, setUser] = useState([])

    const [serverError, setServerError] = useState('')
    
    const [formState, setFormState] = useState({

        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({

        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    })

    const validateChange = e => {
        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrors({
                ...errors,
                [e.target.name]: ''
            });
        })
        .catch(err => {
            setErrors({
                ...errors,
                [e.target.name]: err.errors[0]
            });
        })
    };

    const [buttonDisabled, setButtonDisabled] = useState(true)

    const formSchema = yup.object().shape({
        
        firstName: yup
        .string()
        .required('Please enter your first name.'),
        lastName: yup
        .string()
        .required('Please enter your last name.'),
        email: yup
        .string()
        .required('Please enter a valid email address.'),
        username: yup
        .string()
        .required('Create a username.'),
        password: yup
        .string()
        .required('Create a password.')
    })

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid)
        });
    }, [formState]);

    const inputChange = e => {
        e.persist();
         
        const newFormData = {
            ...formState,
            [e.target.name]: e.target.value
        };
        
        validateChange(e);
        setFormState(newFormData);
    };

    const userSubmit = e => {
        
        e.preventDefault()
        
        axios
        .post('https://webpt15-sleep-tracker-api.herokuapp.com/', formState)
        .then(res => {
            setUser(res.data);
            console.log('success', user);
            setFormState({
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: ''
            })

            setServerError(null);
        })
        .catch(err => {
            setServerError('There has been an error');
        });
    }

    return (
        <form onSubmit={userSubmit}>
            {serverError ? <p>{serverError}</p> : null }
            <div>
                <label htmlFor='firstName'>
                    <div>First Name</div>
                    <input id='firstName' name='firstName' type='text' value={formState.firstName} onChange={inputChange}/>
                    {errors.firstName.length > 0 ? <p>{errors.firstName}</p> : null}
                </label>
            </div>
            <br/>
            <br/>
            <div>
                <label htmlFor='lastName'>
                    <div>Last Name</div>
                    <input id='lastName' name='lastName' type='text' value={formState.lastName} onChange={inputChange}/>
                    {errors.lastName.length > 0 ? <p>{errors.lastName}</p> : null}
                </label>
            </div>
            <br/>
            <br/>
            <div>
                <label htmlFor='email'>
                    <div>Email</div>
                    <input id='email' name='email' type='email' value={formState.email} onChange={inputChange}/>
                    {errors.email.length > 0 ? <p>{errors.email}</p> : null}
                </label>
            </div>
            <br/>
            <br/>
            <div>
                <label htmlFor='username'>
                    <div>Create a Username</div>
                    <input id='username' name='username' type='text' value={formState.username} onChange={inputChange}/>
                    {errors.username.length > 0 ? <p>{errors.username}</p> : null}
                </label>
            </div>
            <br/>
            <br/>
            <div>
                <label htmlFor='password'>
                    <div>Create a Password</div>
                    <input id='password' name='password' type='text' value={formState.password} onChange={inputChange}/>
                    {errors.password.length > 0 ? <p>{errors.password}</p> : null}
                </label>
            </div>
            <button disabled={buttonDisabled}>Sign Up</button>
        </form>
    )

};

export default SignUp;