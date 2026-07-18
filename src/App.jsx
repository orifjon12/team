import { Routes, Route } from 'react-router-dom'
import Navbar from './components/home/navbar/Navbar'
import Banner from './components/home/banner/Banner'
import Footer from './components/home/footer/Footer'
import Home from './router/home/Home'
import About11 from './router/about11/About11'
import About12 from './router/about12/About12'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about11" element={<About11 />} />
        <Route path="/about12" element={<About12 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
