import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="register">
            <h2>Register</h2>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <label>
                    Confirm Password:
                    <input type="password" name="confirmPassword" required />
                </label>
                <button type="submit">Register</button>
            </form>
            <Link to="/login">Already have an account? Login</Link>
        </div>
    );
}

export default Register;
