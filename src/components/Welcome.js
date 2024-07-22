// Welcome.js

import React from "react";

const Welcome = ({ formData }) => {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>Email: {formData.email}</p>
      <p>Password:{formData.password}</p>
      <p>Contact: {formData.contact}</p>
      <p>State: {formData.state}</p>
    </div>
  );
};

export default Welcome;
