import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AITPage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBackClick = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div style={styles.container}>
      {/* SAT Content */}
      <div style={styles.satContent}>
        <h1 style={styles.title}>SAT Preparation Resources</h1>
        {/* Resource Links */}
        <ul style={styles.linkList}>
          <li>
            <a
              href="https://www.khanacademy.org/test-prep/v2-sat-math"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Khan Academy SAT Math Prep
            </a>
          </li>
          <li>
            <a
              href="https://www.cracksat.net/digital/index.html"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Crack SAT Digital Resources
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=xX27kssYDe0"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              SAT Math YouTube Video
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=-pGNBb8M3LQ"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              SAT Math Tips Video 1
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=9lEaKF29TJI&t=42s"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              SAT Math Tips Video 2
            </a>
          </li>
        </ul>
        {/* Back to Homepage Button */}
        <button onClick={handleBackClick} style={styles.backButton}>
          Back to Homepage
        </button>
      </div>

      {/* Add other AIT content or more SAT-related content if needed */}
    </div>
  );
};

// Styling
const styles = {
  container: {
    position: 'absolute', // Position absolutely
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#1a1a1a', // Darker background color for better contrast
    fontFamily: 'Arial, sans-serif', // Change to a clean font
    color: 'white', // Text color
  },
  satContent: {
    marginTop: '20px',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Lighter semi-transparent background
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', // Add shadow for depth
  },
  title: {
    marginBottom: '20px', // Space below title
    fontSize: '2rem', // Increase title font size
    color: '#333', // Dark color for title
  },
  linkList: {
    listStyleType: 'none', // Remove bullet points
    padding: 0, // Remove padding
    marginTop: '10px', // Add some space above the links
  },
  link: {
    color: '#007bff', // Link color
    textDecoration: 'none', // Remove underline
    fontSize: '18px', // Increase font size for readability
    margin: '5px 0', // Space between links
    display: 'block', // Make each link a block element
    transition: 'color 0.3s', // Smooth transition
  },
  backButton: {
    marginTop: '20px', // Space above the button
    padding: '10px 20px', // Button padding
    backgroundColor: '#007bff', // Button background color
    color: 'white', // Button text color
    border: 'none', // No border
    borderRadius: '5px', // Rounded corners
    cursor: 'pointer', // Pointer cursor on hover
    fontSize: '16px', // Font size
    transition: 'background-color 0.3s, transform 0.3s', // Smooth transition
  },
};

// Hover effects for links and button
styles.link.onMouseOver = {
  color: '#0056b3', // Darker blue on hover
};
styles.backButton.onMouseOver = {
  backgroundColor: '#0056b3', // Darker blue on hover
  transform: 'scale(1.05)', // Slightly enlarge the button on hover
};

export default AITPage;
