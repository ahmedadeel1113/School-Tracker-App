import React from 'react';
import { useNavigate } from 'react-router-dom';

const ACTPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>ACT Resources</h1>
        <ul style={styles.linkList}>
          <li>
            <a
              href="https://www.act.org"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Official ACT Website
            </a>
          </li>
          <li>
            <a
              href="https://www.khanacademy.org/test-prep/sat"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Khan Academy ACT Practice (SAT Prep also helpful)
            </a>
          </li>
          <li>
            <a
              href="https://www.princetonreview.com/college/act-test-prep"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Princeton Review ACT Prep
            </a>
          </li>
          <li>
            <a
              href="https://www.kaptest.com/act"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Kaplan ACT Test Prep
            </a>
          </li>
        </ul>
        <button onClick={handleBackClick} style={styles.backButton}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

// Styling
const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#1a1a1a',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
  },
  content: {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  },
  title: {
    marginBottom: '20px',
    fontSize: '2rem',
    color: '#333',
  },
  linkList: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '10px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '18px',
    margin: '5px 0',
    display: 'block',
    transition: 'color 0.3s',
  },
  backButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s, transform 0.3s',
  },
};

export default ACTPage;
