import React, { useState } from 'react';

function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ backgroundColor: 'white', border: '2px solid red', padding: '10px', marginBottom: '10px' }}>

      <h2 onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
        {title}
      </h2>

 
      {!collapsed && <div>{children}</div>}
    </div>
  );
}

export default Container;
