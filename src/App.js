import React from 'react';

import { About, Projects, Features, Footer, Header, CTA } from './containers';
import { Brand, Navbar } from './components';
import './app.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <About />
      <Projects />
      <CTA />
      <Footer />
    </div>
  )
}

export default App