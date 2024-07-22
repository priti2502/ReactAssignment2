import React, { useState } from 'react';

const AppWhenVariableDChanges = () => {
  const [variableD, setVariableD] = useState('');
  const [updateTitle, setUpdateTitle] = useState(false);

  const handleChangeVariableD = (e) => {
    setVariableD(e.target.value);
  };

  const handleUpdateTitle = () => {
    setUpdateTitle(true);
  };

  // Effect to update document title when updateTitle state is true
  React.useEffect(() => {
    if (updateTitle && variableD.trim() !== '') {
      document.title = variableD;
      setUpdateTitle(false); // Reset updateTitle state
    }
  }, [updateTitle, variableD]);

  return (
    <div className="App">
      <input type="text" value={variableD} onChange={handleChangeVariableD} />
      <button onClick={handleUpdateTitle}>Update Title</button>
    </div>
  );
};

export default AppWhenVariableDChanges;
