import React, { Component } from 'react';
import Welcome from './Welcome';

class RegistrationFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      contact: '',
      state: '',
      submittedData: null, 
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully');

    this.setState({
      submittedData: {
        email: this.state.email,
        password: this.state.password,
        contact: this.state.contact,
        state: this.state.state,
      },
      email: '',
      password: '',
      contact: '',
      state: '',
    });
  };

  render() {
    const { email, password, contact, state, submittedData } = this.state;

    return (
      <>
        {submittedData ? (
          <Welcome formData={submittedData} />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Contact:
              <input
                type="tel"
                name="contact"
                value={contact}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              State:
              <select
                name="state"
                value={state}
                onChange={this.handleChange}
              >
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
  }
}

export default RegistrationFormClass;
