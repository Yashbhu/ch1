import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
  axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    });
    }, []);  // <-- Empty array ensures this runs only once on mount

  return (
    <>
      <h1>Yash aur tera DST</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((x,y) => (
          <div key={x.id}>
            <h1>{x.title} </h1>
            <h1>{x.joke}</h1>
          </div>
        ))
      }
    </>
    
  )
}

export default App
