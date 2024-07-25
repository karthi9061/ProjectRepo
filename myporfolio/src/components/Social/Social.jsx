import React, { useState, useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Instagram, WhatsApp, LinkedIn, GitHub, Mail, Twitter } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import './Social.css';

const IconButtonStyled = styled(IconButton)(({ theme, bgColor, loading }) => ({
  backgroundColor: bgColor,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.grey[700],
    transform: 'scale(1.1)',
  },
  transition: 'transform 0.3s, background-color 0.3s',
  width: 48,
  height: 48,
  position: 'relative',
  ...(loading && {
    animation: 'spin 1s linear infinite',
  }),
}));

const Social = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Simulate loading effect
    const timer = setTimeout(() => {
      setLoading(false);
      setVisible(true);
    }, 2000); // 2 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { icon: <Instagram />, url: 'https://www.instagram.com/k_a_r_th_i?utm_source=qr&igsh=eWpmaWlkbGZhaDlz', color: '#E1306C' },
    { icon: <WhatsApp />, url: 'https://wa.me/qr/KKUPC7SOXGPJH1', color: '#25D366' },
    { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/karthik-cm-7900b12a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#0077B5' },
    { icon: <GitHub />, url: 'https://github.com/karthi9061', color: '#333' },
    { icon: <Mail />, url: 'karthik268743@gmail.com', color: '#EA4335' },
    { icon: <Twitter />, url: 'https://twitter.com', color: '#1DA1F2' }
  ];

  return (
    <div className={`social-menu ${visible ? 'slide-in' : 'slide-out'}`}>
      {socialLinks.map(({ icon, url, color }, index) => (
        <Tooltip key={index} title={url}>
          <IconButtonStyled
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            bgColor={color}
            loading={loading} // Pass loading state to styled component
            sx={{ mb: 1 }} // Margin bottom to space out the buttons vertically
          >
            {icon}
          </IconButtonStyled>
        </Tooltip>
      ))}
    </div>
  );
};

export default Social;
