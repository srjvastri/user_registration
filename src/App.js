import React from 'react';
import './App.css';
import { UserTable } from './Table' ;
import AddUser from './adduser/AddUser';

function App() {
  return (
    <div className="App">
        
      <h1>User Registraion</h1>
      <AddUser/>
      <UserTable/>
    </div>
  );
}

export default App;
