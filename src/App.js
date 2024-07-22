import "./App.css";
import React from "react";

import RegistrationFormClass from "./components/RegistrationFormClass";
import RegistrationFormFunction from "./components/RegistrationFormFunction";
import LoginRef from "./components/LoginRef";
import Login from "./components/LoginUsingProps";
import AppFirstTime from "./components/UpdateTitleOnlyFirst";
import AppEveryRender from "./components/UpdateTitleEveryRender";
import AppWhenVariableDChanges from "./components/UpdateTitleVariableChange";
import LoginContext from "./context/LoginContext";

const App = () => {
  return (
    <div className="App">
      <h1>Using Props</h1>
      <Login />
      <hr />

      <h1>Using Context</h1>
      <LoginContext />
      <hr />

      <h1>Using Class</h1>
      <RegistrationFormClass />
      <hr />

      <h1>Using Function</h1>
      <RegistrationFormFunction />
      <hr />

      <h1>Login Using Ref</h1>
      <LoginRef />
      <hr />
      <h1>Update Page Title Only First Time</h1>
      <AppFirstTime />
      <hr />
      <h1>Update Page on Every Render</h1>
      <AppEveryRender />
      <hr />
      <h1>Update Title Variable Changes</h1>
      <AppWhenVariableDChanges />
    </div>
  );
};

export default App;
