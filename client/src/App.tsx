
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './components/Login';


function App() {
  // const [count, setCount] = useState(0)



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
        <Login />
      </div>
      <button onClick={meowTime}>
        Start meowwwwww meowwwwww
      </button>
    </div>
  );
}

export default App
