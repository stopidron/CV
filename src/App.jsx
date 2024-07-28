import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Button () {
  return <button>SUBMIT</button>
}


function App() {
  const [name, setName] = useState('');
  const[person, setPerson] = useState({name: "name", surname:"surname"})

  return (
    <>
    <input 
    type="text"
    value = {name}
    />
    <Button />
    </>
  );


}

export default App
