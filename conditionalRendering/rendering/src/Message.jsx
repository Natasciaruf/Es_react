import React from 'react';

function Message({ age }) {
  return age > 18 ? (
    <p>Welcome, you are over 18</p>
  ) : (
    <p>You are very young</p>
  );
}

export default Message;
