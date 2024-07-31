import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Input';


function App() {

  const [person, setPerson] = useState({
    personName: "", 
    personSurname: "", 
    personEmail: "",
    personPhone:""
  }
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setPerson(prevData => ({...prevData, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data", person)
  }

  const general = [
    { id: 'name', placeholder: 'Enter your name', unique: 'personName'},
    { id: 'surname', placeholder: 'Enter your surname', unique: 'personSurname'},
    { id: 'email', placeholder: 'Enter your email', unique: 'personEmail'},
    {id: 'phone', placeholder: 'Enter your phone number', unique: 'personPhone'}
  ];

  return (
    <form onSubmit={handleSubmit}>
      <section>
      <Input 
      info = {general}
      change = {handleChange}
      thing = {person}
      />
      </section>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App
