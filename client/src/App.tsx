import { useState, useEffect } from 'react'
import { User } from '../../models/User'
import { GatherDummyUsers } from './API/userauth'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
function App() {
  // const [count, setCount] = useState(0)
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<Error>();
  useEffect(() => {
    GatherDummyUsers((res) => {
      if (res.error) {
        setError(res.error)
        console.error(res.error)
      }
      else {
        setUsers(res.data)

      }
    })
  }, [])

  const meowTime = async () => {
    try {
      const response = await fetch("/meow", {
        method: "POST",
        headers: {

          'Content-Type': 'application/json',

        },
        body: JSON.stringify({ username: "example" }),

      });
      console.log(response.body);

    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (

    <div>
      <div>
        <h1 className="text-3xl font-bold underline ">    Hello world!  </h1>
      </div>
      <div>
        {error ? <p>Error because of : {error.message}</p> :
          users.map(user => (
            <li key={user.id}>
              {user.username} - {user.email || 'No email provided'}
            </li>
          ))
        }
      </div>
      <button onClick={meowTime}>
        Start meowwwwww meowwwwww
      </button>
    </div>
  );
}

export default App
