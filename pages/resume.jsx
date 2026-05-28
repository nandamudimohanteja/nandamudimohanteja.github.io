import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import user from '../data/user.json';
import { getAssetPath } from '../lib/utils';

const ResumePage = () => {
  const [error, setError] = React.useState(null);
  const resumeLink = getAssetPath(user.resumeUrl);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: 'var(--text-color, #fff)',
  };

  const viewerContainerStyle = {
    height: '90vh',
  };

  const errorStyle = {
    color: '#ef4444',
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>My Resume</h3>
      <div style={viewerContainerStyle}>
        {error ? (
          <div style={errorStyle}>
            Failed to load PDF: {error}
          </div>
        ) : (
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer
              fileUrl={resumeLink}
              onError={(error) => setError(error.message)}
            />
          </Worker>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Resume' },
  };
}

export default ResumePage;
