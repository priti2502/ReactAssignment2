import React from 'react';

const Welcome = ({ email, password }) => {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Welcome;
