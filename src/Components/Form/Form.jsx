import React, { useState } from 'react';
import './form.css';
const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 5 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Por favor verifique su información nuevamente");
    } else {
      setExito(true);
      setError("");
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <div className='login-header'>
          <h1>Formulario de contacto</h1>
        </div>
        <label>
          <input type="text" className='login-input' placeholder='Nombre completo' value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          <input type="email" className='login-input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        {error && <p>{error}</p>}
        {exito && <p>Gracias {nombre}, te contactaremos lo antes posible vía email.</p>}
        <button className='login-button' type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;