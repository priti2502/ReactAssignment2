import React, { useState } from 'react';

const AppFirstTime = () => {
  const [pageTitle, setPageTitle] = useState('React Assignment');
  const [variableD, setVariableD] = useState('');
  const [titleUpdated, setTitleUpdated] = useState(false);

  const handleUpdateTitleFirstTime = () => {
    if (!titleUpdated && variableD.trim() !== '') {
      document.title = variableD;
      setPageTitle(variableD);
      setTitleUpdated(true);
    }
  };

  const handleChangeVariableD = (e) => {
    setVariableD(e.target.value);
  };

  return (
    <div className="App">
    
      <input type="text" value={variableD} onChange={handleChangeVariableD} />
      <button onClick={handleUpdateTitleFirstTime}>Update</button>
    </div>
  );
};

export default AppFirstTime;
