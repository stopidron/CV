import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[person, setPerson] = useState({
    personName: "", 
    personSurname: "", 
    personEmail: ""}
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setPerson(prevData => ({...prevData, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data", person)
  }

  const formFields = [
    { id: 'name', placeholder: 'Enter your name', unique: 'personName'},
    { id: 'surname', placeholder: 'Enter your surname', unique: 'personSurname'},
    { id: 'email', placeholder: 'Enter your email', unique: 'personEmail'}
  ];

  return (
    <form onSubmit={handleSubmit}>
      <section>
        {formFields.map(field => (
          <input
            key={field.id}
            id={field.id}
            type="text"
            name={field.unique}
            value={person[field.unique]}
            onChange={handleChange}
            placeholder={field.placeholder}
          />
        ))}
      </section>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App
