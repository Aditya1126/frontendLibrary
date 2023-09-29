import React from 'react'
import './App.css'
import { Footer } from './layouts/NavbarAndFooter/Footer';

import Navbar from './layouts/NavbarAndFooter/Navbar';
import HomePage from './layouts/Home/HomePage';

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App;