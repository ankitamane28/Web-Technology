import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {'BrowserRouter','Routers','Route'} from react-router-dom;
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routers>
       
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routers>
      </BrowserRouter>
    </>
  )
}

export default App
