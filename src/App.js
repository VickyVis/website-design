import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Body from './components/Body';
import Card from './components/Card';
import About from './components/About';
import Corporate from './components/Corporate';
import Customer from './components/Customer';
import Ending from './components/ending';
import Youtube from './components/youtube';
 

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Body />
      <Card />
      <About />
      <Corporate />
      <Youtube />
      <Customer />
      <Ending />
    
    </div>
  );
}

export default App;
