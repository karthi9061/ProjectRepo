import React, { useEffect } from 'react';
import './Skills.css'; 
import java from '../../../assets/images/Java.svg';
import html from '../../../assets/images/HTML5.jpg';
import css from '../../../assets/images/css.svg';
import js from '../../../assets/images/js.png';
import reactjs from '../../../assets/images/React.svg';
import mysql from '../../../assets/images/MySQL.svg';
import boot from '../../../assets/images/boot.svg';
import intelj from '../../../assets/images/in.svg';
import PropTypes from 'prop-types';

const Card = ({ icon, title, text }) => (
  <div className={`card ${title === 'Bootstrap' || title === 'IntelliJ IDEA' || title === 'ReactJS' || title === 'MySQL' ? 'card2' : ''}`}>
    <div className="card-icon">
      <img src={icon} alt={`${title} icon`} />
    </div>
    <h3 className="card-title">{title}</h3>
    <p className="card-text">{text}</p>
  </div>
);

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Skills = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card, .card2');
      const viewportHeight = window.innerHeight;

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = cardTop < viewportHeight - 50;
        if (cardVisible) {
          card.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger scroll event on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="skills">
      <div className='maincontainer'>
      <h2 className="skil"><span className='circle'></span>SKILLS<span className='circle'></span></h2>
      <div className="cards" style={{marginBottom:"60px", marginTop:"50px"}}>
        <Card 
          icon={java} 
          title="Java" 
          text="Proficient in Java programming language, used for building robust and scalable applications." 
        />
        <Card 
          icon={html} 
          title="HTML" 
          text="Experienced in HTML for creating the structure of web pages." 
        />
        <Card 
          icon={css} 
          title="CSS" 
          text="Experienced in CSS for designing and styling web pages." 
        />
        <Card 
          icon={js} 
          title="JavaScript" 
          text="Skilled in JavaScript for building dynamic and interactive user interfaces." 
        />
      </div>
      <div className="cards2">
        <Card 
          icon={boot} 
          title="Bootstrap" 
          text="Proficient in Bootstrap for developing responsive and mobile-first websites." 
        />
        <Card 
          icon={intelj} 
          title="IntelliJ IDEA" 
          text="Experienced in using IntelliJ IDEA for efficient Java development." 
        />
        <Card 
          icon={reactjs} 
          title="ReactJS" 
          text="Skilled in ReactJS for building dynamic and interactive user interfaces." 
        />
        <Card 
          icon={mysql} 
          title="MySQL" 
          text="Knowledgeable in MySQL for managing and querying relational databases efficiently." 
        />
      </div>
      </div>
    </div>
  );
};

export default Skills;
