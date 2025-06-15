import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/jokes')  // Make sure your backend route matches this
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)   // ✅ This was incorrectly closed with a `))` in your code
      });
  }, []); // ✅ Empty dependency array to run it only once on load

  return (
    <>
      <h1>Yash aur tera DST</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((person, index) => (
          <p key={index}>
            {person.title} <br />
            joke: {person.joke}
          </p>
        ))
      }
    </>
  )
}

export default App
