import React, {useState} from 'react';
import axios from 'axios';
import '../App.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [ message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8082/api/login',{
                username,
                password,
            });
            if (response.status === 200) {
             setMessage("Login Successful");
           // window.location.href = "/dashboard"; 
            }

        }catch(error) {
            if (error.response && error.response.status === 401) {
                setMessage('Unauthorized login. Please try again.');
            } else {
                setMessage('Login failed. Please try again.');
            }
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:
                    </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
};
export default Login;