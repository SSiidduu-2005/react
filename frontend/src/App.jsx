import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Index from './Index.jsx'
import Footer from './Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hiiii </h1>
    <p>hiiiii</p>
    <h2>hello
    </h2>
    <Header/>
    <Index/>
    <Footer/>
    </>
  )
}

export default App
