import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Button () {
  return <button type="submit">SUBMIT</button>
}

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const[person, setPerson] = useState({personName: "", personSurname: "", personEmail: ""})

  const handleSubmit = (event) => {
    event.preventDefault();
    setPerson({personName: name, personSurname: surname, personEmail: email})
    console.log("name is", name, "surname is", surname, "email is", email)
  }

  return (
    <>
    <form onSubmit = {handleSubmit}>
      <section>
    <input id="name"
    type="text"
    value = {name}
    onChange = {e => setName(e.target.value)}
    placeholder='enter your name'
    />
    
    <input id="surname"
    type="text"
    value = {surname}
    onChange = {e => setSurname(e.target.value)}
    placeholder='enter your surname'
    />
    <input id="email"
    type="text"
    value = {email}
    onChange = {e => setEmail(e.target.value)}
    placeholder='enter your email'
    />
    </section>
    <section>
    </section>
    <Button />
    </form>
    </>
  );
}

export default App
