import React from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Email, WhatsApp } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
    return (
        <Box component="footer" className="footer">
            <Box className="footer-section">
                <img src="/path/to/logo.png" alt="Logo" className="footer-logo" />
                <Typography variant="body1">
                    All rights reserved <span className="bold">KARTHi</span> &copy; 2024
                </Typography>
            </Box>
            <Box className="footer-section">
                <Typography variant="h6">Newsletter</Typography>
                <Box component="form" className="newsletter-form">
                    <TextField
                        type="email"
                        placeholder="Submit your email"
                        variant="outlined"
                        size="small"
                        required
                    />
                    <IconButton className="email-button" type="submit">
                        <Email />
                    </IconButton>
                </Box>
            </Box>
            <Box className="footer-section">
                <Typography variant="h6">Follow Me</Typography>
                <Box className="social-icons">
                    <IconButton href="#" target="_blank" rel="noopener noreferrer" className="facebook">
                        <Facebook />
                    </IconButton>
                    <IconButton href="#" target="_blank" rel="noopener noreferrer" className="twitter">
                        <Twitter />
                    </IconButton>
                    <IconButton href="#" target="_blank" rel="noopener noreferrer" className="linkedin">
                        <LinkedIn />
                    </IconButton>
                    <IconButton href="#" target="_blank" rel="noopener noreferrer" className="instagram">
                        <Instagram />
                    </IconButton>
                    <IconButton href="#" target="_blank" rel="noopener noreferrer" className="whatsapp">
                        <WhatsApp />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
