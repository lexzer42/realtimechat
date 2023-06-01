import Axios from 'axios';
import React from 'react';
const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    Axios.post('http://localhost:3001/authenticate',
    {username: value}
    )
    .then( r => props.onAuth({...r.data, secret: value }))
    .catch(e => console.log('error', e))
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Bienvenido 👋</div>
      
        <div className="form-subtitle">Establezca un nombre de usuario para comenzar</div>
      
        <div className="auth">
          <div className="auth-label">Usuario</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
