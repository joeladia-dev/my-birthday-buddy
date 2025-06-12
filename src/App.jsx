import { useState } from 'react'
import data from './data.js'
import List from './List'

function App() {
  const [people, setPeople] = useState(data)
  const clearList = () => {
    setPeople([])
  }
  return (
   <main>
    <section className="container">
      <h3>{people.length} Birthdays Today</h3>
      <List people={people} />
      <button type='button' onClick={clearList} className='btn btn-block'>Clear List</button>
    </section>
   </main>
  )
}

export default App
