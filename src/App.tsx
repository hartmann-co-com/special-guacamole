import logo from './logo.svg';
import './App.css';
import * as React from "react";

function App() {
  const [message, setMessage] = React.useState('default');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

          <p>Message: {message}</p>
          <button onClick={() => {
              fetch('/.netlify/functions/func')
                  .then(res => res.json())
                  .then(({message}) => setMessage(message));
          }}>click me</button>
      </header>
    </div>
  );
}

export default App;
