import React, {useState} from 'react';
import axios from 'axios';
import '../App.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [ email, setEmail] = useState('');
    const [ message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8082/api/register',{
                username,
                password,
                email,
            });
            setMessage(response.data);
            window.location.href = "/login";

        }catch(error) {
            console.error('Registration error:', error.response ? error.response.data : error.message);
            setMessage('Register Unsuccessful.');
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username:
                    </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <button type="submit">Register</button>
            </form>
            <p>{message}</p>
        </div>
    );
};
export default Register;