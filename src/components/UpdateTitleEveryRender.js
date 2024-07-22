import React, { useState, useEffect } from 'react';

const AppEveryRender = () => {
  const [variableD, setVariableD] = useState('');

  useEffect(() => {
    if (variableD.trim() !== '') {
      document.title = variableD;
    }
  }, [variableD]);

  const handleChangeVariableD = (e) => {
    setVariableD(e.target.value);
  };

  return (
    <div className="App">
     
      <input type="text" value={variableD} onChange={handleChangeVariableD} />
    </div>
  );
};

export default AppEveryRender;
