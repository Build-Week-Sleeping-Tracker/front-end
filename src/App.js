import React from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Sleep Tracker App</h2>
        <div>
          <h3>Login</h3>
          <Login />
          <br/>
          <br/>
          <br/>
          <h3>Sign-Up</h3>
          <SignUp />
        </div>
      </header>
    </div>
  );
}

export default App;
