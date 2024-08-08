import { useState } from 'react'
import './App.css'
import Input from './Input';


function App() {
  const [person, setPerson] = useState({
    personName: "", 
    personSurname: "", 
    personEmail: "",
    personPhone:"",
    personSchool:"",
    personTitle:"",
    personDate:"",
    personCompany:"",
    personPosition:"",
    personFrom:"",
    personUntil:""
  }
  );

  const handleChange = (event) => {
    const { name, value } = event.target
    setPerson(prevData => ({...prevData, [name]: value}))
  };


  const handleSectionClick = (index) => {
    console.log(`Button from section ${index + 1} clicked`);
  };

  const general = [
    [
      { id: 'name', placeholder: 'Enter your name', unique: 'personName' },
      { id: 'surname', placeholder: 'Enter your surname', unique: 'personSurname'},
      { id: 'email', placeholder: 'Enter your email', unique: 'personEmail'},
      { id: 'phone', placeholder: 'Enter your phone number', unique: 'personPhone'}
    ],
    [
      { id: 'school', placeholder: 'Enter the name of your school', unique: 'personSchool'},
      { id: 'title', placeholder: 'Enter your study title', unique: 'personTitle'},
      { id: 'date', placeholder: 'Date', unique: 'personDate'}
    ],
    [
      {id: 'company', placeholder: 'Company name', unique: 'personCompany'},
      {id: 'position', placeholder: 'Position title', unique: 'personPosition'},
      {id: 'from', placeholder: 'Start date', unique: 'personFrom'},
      {id: 'until', placeholder: 'End date', unique: 'personUntil'},
    ]
  ];

  return (
    <form>
      {general.map((section, index) => (
        <section key={index}>
          <Input 
            info={section}
            change={handleChange}
            thing={person}
          />
          <button type="submit" onClick={() => handleSectionClick(index)}>Section {index + 1}</button>
        </section>
      ))}
    </form>
  );
}

export default App
