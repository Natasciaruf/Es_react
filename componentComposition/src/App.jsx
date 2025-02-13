import React from 'react';
import Container from './components/Container';

function App() {
  return (
    <div>
      <Container title="Titolo 1">
        <p>Questi sono i figli del contenitore 1.</p>
      </Container>
      <Container title="Titolo 2">
        <p>Questi sono i figli del contenitore 2.</p>
      </Container>
    </div>
  );
}

export default App;
