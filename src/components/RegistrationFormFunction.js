import React, { useState } from "react";
import Welcome from "./Welcome";

const RegistrationFormFunction = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    contact: "",
    state: "",
    submitted: false,
  });

  const [submittedData, setSubmittedData] = useState(null); // State to hold submitted data

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Register successfully");
    setSubmittedData(formData); // Store submitted data in state
    setFormData({
      email: "",
      password: "",
      contact: "",
      state: "",
      submitted: true,
    });
  };

  return (
    <>
      {submittedData ? (
        <Welcome formData={submittedData} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Contact:
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            State:
            <select name="state" value={formData.state} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Mah">Maharashtra</option>
              <option value="Tel">Telangana</option>
              <option value="Guj">Gujarat</option>
            </select>
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      )}
    </>
  );
};

export default RegistrationFormFunction;
