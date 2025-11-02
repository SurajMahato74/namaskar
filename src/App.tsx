import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Restaurant from './components/Restaurant';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Rooms />
      <Gallery />
      <Restaurant />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;