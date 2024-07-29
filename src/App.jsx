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

  const[person, setPerson] = useState({personName: "", personSurname: ""})

  const handleSubmit = (event) => {
    event.preventDefault();
    setPerson({personName: name, personSurname: surname})
    console.log("name is", name, "surname is", surname)
  }

  return (
    <>
    <form onSubmit = {handleSubmit}>
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
    <Button />
    </form>
    </>
  );
}

export default App
