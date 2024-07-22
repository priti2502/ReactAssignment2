import React, { useRef, useState } from 'react';
import WelcomeUsingProps from './WelcomeUsingProps';

const LoginRef = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    
    if (username.trim() === '') {
      alert('Please enter a username');
      return;
    }

   
    setLoggedIn(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <div>
          <label>
            Username:
            <input type="text" ref={usernameRef} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" ref={passwordRef} />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <WelcomeUsingProps username={usernameRef.current.value} />
      )}
    </div>
  );
};

export default LoginRef;
