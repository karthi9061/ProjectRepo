import React, { useEffect, useRef } from 'react';
import img1 from '../../../assets/images/A1.png';
import { GitHub } from '@mui/icons-material';
import './Projects.css';

const Project = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div id='projects' className='project-container'>
      <div className='Project-header'>PROJECTS</div>
      <div className='project-card' ref={(el) => (cardsRef.current[0] = el)}>
        <div className='project-card-image'>
          <img src={img1} alt="Project screenshot" />
        <h3 className='title1'>EasyStays</h3>
        </div>
        <div className='project-card-info'>
          <h3>EasyStays (Hotel Booking Website)</h3>
          <p>
            A hotel booking platform developed using Java Spring Boot for the backend and React for the frontend.
            The application utilizes MySQL for data storage and IntelliJ IDEA for development.
          </p>
          <a href='https://github.com/' aria-label='View project on GitHub'>
            <GitHub className='icon' /> GitHub Link
          </a>
        </div>
      </div>
      <div className='project-card' ref={(el) => (cardsRef.current[1] = el)}>
        <div className='project-card-image'>
          <img src={img1} alt="Project screenshot" />
        <h3 className='title1'>RealEst</h3>
        </div>
        <div className='project-card-info'>
          <h3>RealEst (Real-estate Website)</h3>
          <p>
            A real estate website built with Java Spring Boot on the backend and React on the frontend.
            It uses MySQL for managing property listings and customer information, developed with IntelliJ IDEA.
          </p>
          <a href='https://github.com/' aria-label='View project on GitHub'>
            <GitHub className='icon' /> GitHub Link
          </a>
        </div>
      </div>
      <div className='project-card' ref={(el) => (cardsRef.current[2] = el)}>
        <div className='project-card-image'>
          <img src={img1} alt="Project screenshot" />
        <h3 className='title1'>Portfolio</h3>
        </div>
        <div className='project-card-info'>
          <h3>Personal Portfolio</h3>
          <p>
            A personal portfolio website showcasing my projects and skills. Developed with React for the frontend
            and Java Spring Boot for the backend, with MySQL used for any data storage needs. IntelliJ IDEA was used for development.
          </p>
          <a href='https://github.com/' aria-label='View project on GitHub'>
            <GitHub className='icon' /> GitHub Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
