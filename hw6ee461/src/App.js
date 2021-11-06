import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {Deploy} from './Component/Deploy/Deploy'

function App() {
  const [input, setInput]= useState("")
  const [state, setState]= useState("")

  const deploy =()=> {
    console.log(input);
    fetch("/user/"+input)
    .then(res => res.json())
    .then(data => setState(data.last))
  }


  return (
    <div className="App">
      <Deploy/>
      <div>
        <h1>Your Input (request to server)</h1>
        <input onChange={(e)=>{
          setInput(e.target.value);
        }}/>
        <button onClick={deploy}> Login </button>
      </div>
      <div>
        <h1>Your Output (response from server)</h1>
        <p>
          {state}
        </p>
      </div>
    </div>
  );
}

export default App;
