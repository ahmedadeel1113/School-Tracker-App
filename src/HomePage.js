import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Only show the "Resources Menu" button on the homepage ("/")
  const isHomePage = location.pathname === '/';

  return (
    <div style={styles.container}>
      {/* Show the menu button only if it's the homepage */}
      {isHomePage && (
        <div style={styles.menuButton} onClick={toggleDropdown}>
          Resources Menu
        </div>
      )}

      {/* Dropdown Content */}
      {dropdownVisible && (
        <div style={styles.dropdownContainer}>
          <div style={styles.button}>
            <Link to="/act" style={styles.link}>ACT Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/biology" style={styles.link}>AP Biology Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/calculus" style={styles.link}>AP Calculus Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/chemistry" style={styles.link}>AP Chemistry Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/csa" style={styles.link}>AP CSA Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/csp" style={styles.link}>AP CSP Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/english-language" style={styles.link}>AP English Language Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/english-literature" style={styles.link}>AP English Literature Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/environmental-science" style={styles.link}>AP Environmental Science Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/macroeconomics" style={styles.link}>AP Macroeconomics Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/microeconomics" style={styles.link}>AP Microeconomics Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/physics-mechanics" style={styles.link}>AP Physics C: Mechanics Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/psychology" style={styles.link}>AP Psychology Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/statistics" style={styles.link}>AP Statistics Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/us-history" style={styles.link}>AP U.S. History Resources</Link>
          </div>
          <div style={styles.button}>
            <Link to="/ait" style={styles.link}>SAT Resources</Link>
          </div>
        </div>
      )}
    </div>
  );
};

// Styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: 'black',
    fontFamily: 'Arial, sans-serif',
  },
  menuButton: {
    backgroundColor: '#28a745', // Green color for "Resources Menu" button
    color: 'white',
    padding: '14px 28px',
    fontSize: '20px',
    borderRadius: '8px',
    cursor: 'pointer',
    textAlign: 'center',
    marginBottom: '30px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
  dropdownContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 buttons per row
    gap: '15px', // Reduce the gap a bit
    width: '80%', // Adjust the width
  },
  button: {
    padding: '15px',
    backgroundColor: '#007bff',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease, background-color 0.3s ease',
    fontSize: '16px',
    cursor: 'pointer',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  buttonHover: {
    backgroundColor: '#0056b3', // Darker blue on hover
    transform: 'scale(1.05)', // Slightly enlarge the button on hover
  },
  buttonActive: {
    transform: 'scale(1.1)', // Enlarge the button on click
  }
};

export default HomePage;
