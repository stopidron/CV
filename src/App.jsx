import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

  const formFields = [
    { id: 'name', placeholder: 'Enter your name', unique: 'personName'},
    { id: 'surname', placeholder: 'Enter your surname', unique: 'personSurname'},
    { id: 'email', placeholder: 'Enter your email', unique: 'personEmail'},
    {id: 'phone', placeholder: 'Enter your phone number', unique: 'personPhone'}
  ];

  function Input(fields, change, thing){
    console.log("formFields", formFields);  
    return (
      <>
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
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <section>
      <Input 
      fields = {formFields}
      change = {handleChange}
      thing = {person}
      />
      </section>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App
