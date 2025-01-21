import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//pagina de login

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
    <form onSubmit={tiao} className='login-box'>
      <h2>Login</h2>
      <input type="email"
      className='user-box'
      value={email}
      onChange={ (e) => setEmail(e.target.value)}
      placeholder='email'/>

      <input type="text"
      className='user-box'
      value={nome}
      onChange={ (e) => setNome(e.target.value)}
      placeholder='Nome'/>

    <button>aperta</button>
    

    <div>
      const bancodedados = [ {dados.nome},{dados.email}];
    </div>
    
    </form>

   

  );
  const banco = Arr 
  banco.push([ {nome},{email}])
}


export default App;
//commit 10/10/2024

//test