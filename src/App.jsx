import { useState } from 'react'
import './index.css'
import Home from './components/pages/website/Home';
import { Routes , Route } from 'react-router-dom';
import Admin from './components/pages/admin/Admin';


function App() {

  return (
    <>
     <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
     </Routes>
    </>
  )
}

export default App
