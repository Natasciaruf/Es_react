import React from 'react';

function AlertClock({ showAlert }) {
  return (
    <button onClick={showAlert}>Show Current Time</button>
  );
}

export default AlertClock;
