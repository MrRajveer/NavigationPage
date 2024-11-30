import React from 'react'
import Navigation from './componet/Navigation/Navigation'
import './App.css'
import ContactHeader from './componet/Contact/ContactHeader'
import ContactForm from './componet/ContactForm/ContactForm'


function App() {
  return (
    <div>
      <Navigation/>
      <main className= "main_container">
      <ContactHeader/>
      <ContactForm/>
      </main>
    </div>
  )
}

export default App