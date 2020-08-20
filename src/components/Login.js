import React from 'react';

const Login = () => {

    return(
        <form>
            <div>
                <label htmlFor='username'>
                    <div>Username</div>
                   <input id='username' name='username' type='text' value='' onChange=''/> 
                </label>
            </div>
            <br/>
            <br/>
            <div>
                <label htmlFor='password'>
                    <div>Password</div>
                   <input id='password' name='password' type='text' value='' onChange=''/> 
                </label>
            </div>
            <button>Login</button>
        </form>
    )

};

export default Login;