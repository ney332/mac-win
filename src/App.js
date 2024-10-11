import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(e) {
  const [email, setEmail] = useState("")
  const [nome, setNome] = useState("")
  const [dados, setDados] = useState({})

  function tiao(e){
    e.preventDefault()
   setDados({
      nome: nome,
      email: email

    });


  };

  return(
    <form onSubmit={tiao}>
      <input type="email"
      value={email}
      onChange={ (e) => setEmail(e.target.value)}/>

      <input type="text"
      value={nome}
      onChange={ (e) => setNome(e.target.value)}/>

    <button>aperta</button>

    <div>
      <label>nome do caba {dados.nome}</label>
        <label>email do caba {dados.email}</label>
    </div>
    
    </form>

  );
  
}


export default App;
//commit 10/10/2024

//test