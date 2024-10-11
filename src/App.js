import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [dados, setDados] = useState({})

  function tiao(){
    setDados({
      nome: tiao,
      emmail: {email}

    })


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

    <div>
      <p>nome do caba {dados.nome}</p>
        <p>email do caba {dados.email}</p>
    </div>
    </form>

  );
  
}

export default App;
//commit 10/10/2024

//test