import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Home from './components/Home'
import Details from './components/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<Details />} />
      </Routes>
    </>
  )
}

export default App
