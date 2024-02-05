import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Pure from './Components/Pure';
import Regular from './Components/Regular';

function App() {
  return (
    <div>
      <h3>Regular Component</h3>
      <Regular />
      <h3>Pure Component</h3>
      <Pure />
    </div>
  );
}

export default App;
