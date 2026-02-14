import React from 'react'
import Hero from './Components/Home/Hero'
import Certificates from './Components/Certificates/Certificates'
import Footer from './Components/Footer/Footer'
import ContactMe from './Components/ContactMe/ContactMe'
import Header from './Components/Header/Header'
import Projects from './Components/Projects/Projects'
import Qualifications from './Components/Qualifications/Qualifications'
import Skill from './Components/Skills/Skill'

const App = () => {
  return (
    <>
    <div>
      <Header></Header>
    </div>
    <div>
      <Hero></Hero>
    </div>
    <div>
      <Skill></Skill>
    </div>
    <div>
      <Qualifications></Qualifications>
    </div>
    <div>
      <Projects></Projects>
    </div>
    <div>
      <Certificates></Certificates>
    </div>
    <div>
      <ContactMe></ContactMe>
    </div>
    <div>
      <Footer></Footer>
    </div>



    </>
  )
}

export default App
