import React from 'react';
import './About.css';
import { useSpring, animated } from '@react-spring/web';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FlagIcon from '@mui/icons-material/Flag';
import A3 from '../../../assets/images/A3.png';
import DownloadBtn from '../../styledComponents/DownloadBtnn.jsx';

const texts = ['Web Developer', 'Full-Stack Developer', 'Software Developer'];

const About = () => {
  const [index, setIndex] = React.useState(0);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    reverse: index % 2 === 0,
    onRest: () => setIndex((prevIndex) => (prevIndex + 1) % texts.length),
    config: { duration: 1500 }
  });

  return (
    <div>
      <section id="about" className="About-section">
        <div className="about-me-container">
          <div className="image-container">
            <img src={A3} alt="Karthik" className="profile-image" />
          </div>
          <div className="info-container">
            <h2>About Me</h2>
            <animated.h1 style={props}>{texts[index]}</animated.h1>
            <p>
              As a passionate full-stack web developer, I specialize in crafting dynamic, responsive web applications that deliver seamless user experiences. With expertise in both front-end and back-end technologies, I bring innovative solutions to complex challenges.
              My skill set includes modern frameworks and technologies such as React, Node.js, and MongoDB, allowing me to build scalable and efficient web solutions from concept to deployment.
            </p>
            <div className="details">
              <div className="detail-item">
                <span><PersonIcon /> Name</span>
                <span className='text2'>Karthik CM</span>
              </div>
              <div className="detail-item">
                <span><CakeIcon /> Age</span>
                <span className='text2'>23 Years</span>
              </div>
              <div className="detail-item">
                <span><WorkIcon /> Occupation</span>
                <span className='text2'>Full-Stack Web Developer</span>
              </div>
              <div className="detail-item">
                <span><PhoneIcon /> Phone</span>
                <span className='text2'>+91 9061969314</span>
              </div>
              <div className="detail-item">
                <span><EmailIcon /> Email</span>
                <span className='text2'>Karthik268743@gmail.com</span>
              </div>
              <div className="detail-item">
                <span><FlagIcon /> Nationality</span>
                <span className='text2'>Indian</span>
              </div>
            </div>
          </div>
        <div className="download-btn-container">
          <DownloadBtn /> {/* Add the DownloadBtn component here */}
        </div>
        </div>
      </section>
    </div>
  );
};

export default About;
