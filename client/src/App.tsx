import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Person } from '../../models/User'
function App() {
  // const [count, setCount] = useState(0)

  const [people, setPeople] = useState<Person[]>([]); // Specify the type here

  useEffect(() => {
    fetch('/api/people')
      .then((response) => response.json())
      .then((data: Person[]) => setPeople(data)); // Specify the type here
  }, []);

  return (

    <div>
      <div>
        <h1 className="text-3xl font-bold underline ">    Hello world!  </h1>
      </div>
      {people.map((person) => (
        <div key={person.name}>
          <h2>{person.name}</h2>
          <p>Age: {person.age}</p>
        </div>
      ))}
    </div>
  );
}

export default App
