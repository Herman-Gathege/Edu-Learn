import React, { useState } from 'react';
import axios from 'axios'; // To handle API requests

const Login = () => {
    // State for storing user input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // State for message display
    const [messageType, setMessageType] = useState(''); // To differentiate success and error messages

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior

        // Prepare the user credentials
        const userCredentials = {
            email,
            password,
        };

        try {
            // Send the login request to your backend
            const response = await axios.post('http://localhost:5000/login', userCredentials);

            // Set success message
            setMessage(response.data.message);
            setMessageType('success'); // Set message type to 'success' for styling

            // You can redirect the user to another page after login success, e.g., dashboard
            // window.location.href = '/dashboard'; // Uncomment and set the correct route

        } catch (error) {
            // Set error message if login fails
            setMessage('Error logging in. Please check your credentials and try again.');
            setMessageType('error'); // Set message type to 'error' for styling
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem', textAlign: 'center' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* Email input */}
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>

                {/* Password input */}
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    style={{
                        padding: '0.5rem 1rem',
                        background: 'green',
                        color: 'white',
                        border: 'none',
                    }}
                >
                    Login
                </button>
            </form>

            {/* Message display */}
            {message && (
                <div
                    style={{
                        marginTop: '1rem',
                        padding: '0.5rem',
                        backgroundColor: messageType === 'success' ? 'lightgreen' : 'lightcoral',
                        color: messageType === 'success' ? 'green' : 'red',
                    }}
                >
                    {message}
                </div>
            )}
        </div>
    );
};

export default Login;
