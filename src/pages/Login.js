import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <h2>Login</h2>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <button type="submit">Login</button>
            </form>
            <Link to="/register">Don't have an account? Register</Link>
        </div>
    );
}

export default Login;
