import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Button () {
  return <button type="submit">SUBMIT</button>
}

function App() {
  const [name, setName] = useState('');
  const[person, setPerson] = useState({personName: ""})

  const handleSubmit = (event) => {
    event.preventDefault();
    setPerson({personName: name})
    console.log("name is now", name)
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
    <Button />
    </form>
    </>
  );
}

export default App
