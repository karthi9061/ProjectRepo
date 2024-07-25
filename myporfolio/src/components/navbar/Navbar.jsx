import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import './Navbar.css';

const pages = ['Home', 'Skills', 'Projects', 'About', 'Contact'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const [activePage, setActivePage] = useState('Home');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (page) => {
    setActivePage(page);
    handleCloseNavMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: scrolling ? '#333' : 'transparent', // Change color based on scrolling
        boxShadow: 'none',
        borderBottom: 'none',
        transition: 'background-color 0.3s ease', // Smooth transition
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            KARTHi
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavClick(page)}>
                  <Typography textAlign="center">
                    <a href={`#${page.toLowerCase()}`} className="nav-link">
                      {page}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }} />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            KARTHI
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                component="a"
                href={`#${page.toLowerCase()}`}
                onClick={() => handleNavClick(page)}
                sx={{
                  my: 2,
                  color: activePage === page ? 'orange' : 'white',
                  display: 'block',
                  mx: 2,
                  position: 'relative',
                  overflow: 'hidden',
                  px: 2,
                  py: 1,
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  mr: 2,
                  '&:hover': {
                    transform: 'scale(1.05)',
                    borderRadius: '30px',
                    opacity: '90%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#FF5722',
                    transform: 'scaleX(0)',
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease',
                    zIndex: -1,
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom left',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
