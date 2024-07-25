// DownloadBtn.js
import React from 'react';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import resume from './../../assets/images/A1.png';

const DownloadBtnn = () => {
  return (
    <a href={resume} download="Karthik_CM_Resume.pdf" className="download-btn-link">
      <Button variant="contained" color="primary" startIcon={<DownloadIcon />} className="download-btn">
        Download Resume
      </Button>
    </a>
  );
};

export default DownloadBtnn;
