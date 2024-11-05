//import { useState } from 'react'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterButton from './components/counterbutton';
import TableToto from './components/PlayerTable';
import ToDoList from './components/ToDoList';

const players = [
  {
      id: 1,
      score: 0,
      name: "toto",
  },
];

function App() {
  //const [count, setCount] = useState(0)
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <TableToto players={players} />
      <CounterButton />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ToDoList />
    </>
  )
}

export default App
