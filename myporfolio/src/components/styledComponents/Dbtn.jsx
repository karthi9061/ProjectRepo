import React, { useState } from 'react';
import './Button.css';

const Dbtn = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    console.log('Download button clicked');

    // Simulate download completion
    setTimeout(() => {
      setIsDownloading(false);
    }, 6000); // Match this duration with your CSS animation duration
  };

  return (
    <div className="download-btn-container">
      <button className={isDownloading ? 'download-btn downloading' : 'download-btn'} onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};

export default Dbtn;
