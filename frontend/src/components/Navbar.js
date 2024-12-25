import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.brand}>
                <Link to="/" style={styles.link}>EduLearn</Link>
            </div>
            <div style={styles.navLinks}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/login" style={styles.link}>Login</Link>
                <Link to="/signup" style={styles.link}>Signup</Link>
                <Link to="/courses" style={styles.link}>Courses</Link>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        padding: '10px 20px',
    },
    brand: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'white',
    },
    navLinks: {
        display: 'flex',
        gap: '15px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px',
    },
};

export default Navbar;
