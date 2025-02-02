import React from 'react'
import Header from './Components/Header'
import Home from "./Components/Home"
import About from "./Components/About"
import Academics from "./Components/Academics"
import Gallery from "./Components/Gallery"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className="bg-gradient-to-br from-green-100 via-white to-red-100">
      <Header/>
      <Home/>
      <About/>
      <Academics/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App