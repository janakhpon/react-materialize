import React from 'react';
import NavbarCon from './components/Navbar';
import Createtask from './components/Createtask';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarCon />
      <Createtask />
    </div>
  );
}

export default App;
