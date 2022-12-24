import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './Detail'
import './index.css'
import Meals from './Meals'
import Navbar from './Navbar'


const App = () => {
  return (
    <div className='container justify-start mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meals/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App