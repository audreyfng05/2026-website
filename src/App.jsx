import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Experience from './sections/Experience'
import Work from './sections/Work'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Work />
      </main>
      <Footer />
    </>
  )
}

export default App