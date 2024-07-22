import React, { useState } from 'react';
import WelcomeUsingProps from './WelcomeUsingProps';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    if (username.trim() === '') {
      alert('Please enter a username');
    } else {
      setLogin(true);
    }
  };

  return (
    <div>
      {!login ? (
        <div>
         
          UserName: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
          Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <WelcomeUsingProps username={username} />
      )}
    </div>
  );
};

export default Login;
