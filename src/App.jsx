import React from 'react';
import { ssrImportKey } from 'vite/module-runner'
import './App.css'
import Navbar from './componenets/Navbar';
import Hero from './componenets/Hero';
import Features from './componenets/Features';
import WorkFlow from './componenets/WorkFlow';
import Price from './componenets/Price';
import Footer from './componenets/Footer';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        <Navbar />
        <Hero />
        <Features />
        <WorkFlow />
        <Price />
        <Footer />
      </h1>

    </div>
  )
}

export default App
