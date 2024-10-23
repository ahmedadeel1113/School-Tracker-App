import React from 'react';
import { useNavigate } from 'react-router-dom';

const APStatisticsPage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBackClick = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div style={styles.container}>
      <div style={styles.statContent}>
        <h1 style={styles.title}>AP Statistics Resources</h1>
        <ul style={styles.linkList}>
          <li>
            <a
              href="https://www.khanacademy.org/math/ap-statistics"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Khan Academy AP Statistics
            </a>
          </li>
          <li>
            <a
              href="https://apcentral.collegeboard.org/courses/ap-statistics"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              AP Statistics Official Course Description
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=hZxnzfnt5v8"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              AP Statistics Overview Video
            </a>
          </li>
          {/* Add more links as necessary */}
        </ul>
        {/* Back to Homepage Button */}
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
  statContent: {
    marginTop: '20px',
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

export default APStatisticsPage;
