import React, { useState } from 'react';
import { Container, Typography, Box, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './Contact.css';

const Contact = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      message: !formData.message,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      e.target.submit(); // Submit the form if validation passes
    }
  };

  return (
    <section id="contact" ref={ref} className="contact-section">
      <Container maxWidth="sm" className="contact-container">
        <Typography variant="h4" component="h2" className="contact-title">
          Contact Me
        </Typography>
        <Typography variant="body1" className="contact-description">
          I'm always open to discussing new projects, creative ideas, or just having a chat. Feel free to reach out to me!
        </Typography>
        <Box 
          component="form" 
          noValidate 
          autoComplete="off" 
          className="contact-form" 
          action="https://api.web3forms.com/submit" 
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="access_key" value="0cef247d-c89f-4639-ac7c-e4e8866a6435"/>
          <Box className="form-group">
            <TextField
              fullWidth
              required
              id="name"
              name="name"  
              label="Name"
              variant="outlined"
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              helperText={errors.name ? 'Name is required' : ''}
            />
          </Box>
          <Box className="form-group">
            <TextField
              fullWidth
              required
              id="email"
              name="email"  
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email ? 'Email is required' : ''}
            />
          </Box>
          <Box className="form-group">
            <TextField
              fullWidth
              required
              id="message"
              name="message" 
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              helperText={errors.message ? 'Message is required' : ''}
            />
          </Box>
          <button type='submit' className='submit-button'>
            Submit <SendIcon style={{ color: 'white' }} />
          </button>
        </Box>
      </Container>
    </section>
  );
});

export default Contact;
