import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import { Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Todo</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </>
  )
}

export default App
