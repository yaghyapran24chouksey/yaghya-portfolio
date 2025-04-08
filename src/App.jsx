import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
