import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../src/pages/Home'
import Header from '../src/components/Header'
import Votacao from './pages/Votacao';
import Resultado from '../src/pages/Resultado'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/votacao" element={Votacao} />
          <Route path="/resultado" element={Resultado} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
