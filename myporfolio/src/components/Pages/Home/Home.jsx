import React, { useState, useEffect } from 'react';
import img1 from '../../../assets/images/A5.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Home.css';

const textOptions = [
  'Web Developer',
  'Software Developer'
];

const Home = () => {
  const [currentText, setCurrentText] = useState(textOptions[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = textOptions.indexOf(prev);
        const nextIndex = (currentIndex + 1) % textOptions.length;
        return textOptions[nextIndex];
      });
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container" id="home">
      <div className="home-content">
        <h1 className="home-title">Hey!, I'm <span style={{color:"rgb(9, 255, 243)"}}>Karthik</span></h1>
        <p className="home-description">
          "Creative <span className='span1'>_{currentText}_</span> with a passion for Java, specializing in designing and building dynamic,
          user-centric web applications that stand out and perform exceptionally."
        </p>
        <a href="#contact" className="btn">
          Get in Touch <span className="arrow1"><ArrowForwardIcon className="arrow" /></span>
        </a>
      </div>
      <div className="home-image">
        <img src={img1} alt="Home Image" className="home-image" />
      </div>
    </div>
  );
};

export default Home;
