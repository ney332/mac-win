import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function tiao(){
    alert("tiao said hi ")


  }

  return(
    <form onSubmit={tiao}>
      <input type='email'
      value={email}
      onChange={ (e) => setEmail(e.target.value)}/>

      <input type='senha'
      value={senha}
      onChange={ (e) => setSenha(e.target.value)}/>

    <button>aperta</button>
    </form>
  );
}

export default App;
//commit 10/10/2024

//test