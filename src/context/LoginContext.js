import React, { useState } from 'react';
import DataContext from './DataContext.js';
import { Welcome } from './Welcome';

export default function LoginContext() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

   const  handleLoginClick =(e)=>{
    e.preventDefault();
    setIsLoggedIn(true);
 
   }

    if (isLoggedIn) {
        return(
        <DataContext.Provider value={{ username, password }}>
                <Welcome />
            </DataContext.Provider>
        );
    }
   

   
   

    return (
     
            <div>
               
                <form>
                <label> Username: <input type="text" value={username}  onChange={handleUsernameChange} />
                    </label> <br />
                    <label>Password:
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <br></br>
                    <button type="button" onClick={handleLoginClick}>Login </button>
                 
                </form>
               
            </div>
       
    );
}