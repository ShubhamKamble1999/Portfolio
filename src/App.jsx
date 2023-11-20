import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/navbar/NavBar'
import { Landing } from './components/Landing/Landing'
import { AboutUs } from './components/AboutUs/aboutUs'
import { MyProject } from './components/myProjects/MyProject'
import PopUp from './components/popUp/PopUp'
import Accordium from './components/projectAccordium/accordium'

function App() {
  const [count, setCount] = useState(0)
  const [welcomePopUp, setWelcomePopUp] = useState(false)

  const handleClosePopUp = () => {
    setWelcomePopUp(false)
  }

  useEffect(() => {
    setWelcomePopUp(true)
    const timeOut = setTimeout(() => {
      handleClosePopUp()
    }, 3000)

    return () => {
      clearTimeout(timeOut)
    }
  }, [])


  return (
    <>
      {
        welcomePopUp &&
        <PopUp >
          <div>
            <h1>Hello Mic</h1>
            <p>I am here</p>
          </div>
        </PopUp>
      }
      <NavBar />
      <Landing />
      <AboutUs />
      <div className="project-heading">
        <h1> My Project </h1>
      </div>
      {/* <MyProject /> */}
      <Accordium />

    </>
  )
}

export default App