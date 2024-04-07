import { useState } from 'react'
import './App.css'
import CalendarComponent from './Components/Calendar/Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>AGENDA TU CITA</h1>
        <hr />
        <CalendarComponent />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

    </>
  )
}

export default App
