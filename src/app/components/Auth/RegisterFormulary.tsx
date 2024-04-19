    'use client'
    import React, { useState } from 'react';
        interface UserData {
        id: string;
        email: string;
        username: string;
        }

    const RegisterFormulary = () => {
        const [formData, setFormData] = useState({
            email: '',
            username: '',
            password: ''
        });
        const [mensaje, setMensaje] = useState('');
        const [userData, setUserData] = useState<UserData | null>(null);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

        try {
        const response = await fetch('http://localhost:8080/api/auth', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        console.log("testFormulary")

        if (response.ok) {
            setUserData(data);
            setMensaje('¡Registro succesfull!');
          } else {
            setMensaje('Registration error. Please try again.');
          }
        } catch (error) {
          console.error('Error to send request:', error);
          setMensaje('Registration error. Please try again.');
        }
    };

    return (
        <div className='text-black font-bold'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div className='text-black font-bold'>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className='text-black font-bold'>
            <label>username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div className='text-black font-bold'>
            <label>password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Sign up</button>
        </form>
        {mensaje && <p>{mensaje}</p>}
        {userData && (
            <div>
            <h3>Data:</h3>
            <p>ID: {userData.id}</p>
            <p>Email: {userData.email}</p>
            <p>Nombre de usuario: {userData.username}</p>
            </div>
        )}
        </div>
    );
    };

    export default RegisterFormulary;
