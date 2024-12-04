import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { AuthInputs } from './components/AuthInput'

function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  )
}

export default App
