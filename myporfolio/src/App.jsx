import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import './index.css';
import Social from './components/Social/Social';
import Skillls from './components/Pages/Skillls/Skillls';
import Footer from './components/Footer/Footer';
import Project from './components/Pages/Projects/Project';
import Loader from './components/Loader/Loader'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <Social />
      <Home />
      <Skillls />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
