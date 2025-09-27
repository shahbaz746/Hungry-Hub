import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Privecypolicy from './components/Privecypolicy'
import Tremandconditions from './components/Tremandconditions'

function App() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")

  return (
    <>
      <Navbar search={search} setSearch={setSearch} setCategory={setCategory} />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home search={search} category={category} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privecypolicy />} />
        <Route path="/terms" element={<Tremandconditions />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
