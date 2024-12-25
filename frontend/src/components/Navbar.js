// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav style={styles.navbar}>
//             <div style={styles.brand}>
//                 <Link to="/" style={styles.link}>EduLearn</Link>
//             </div>
//             <div style={styles.navLinks}>
//                 <Link to="/" style={styles.link}>Home</Link>
//                 <Link to="/login" style={styles.link}>Login</Link>
//                 <Link to="/signup" style={styles.link}>Signup</Link>
//                 <Link to="/courses" style={styles.link}>Courses</Link>
//             </div>
//         </nav>
//     );
// };

// const styles = {
//     navbar: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: '#4CAF50',
//         padding: '10px 20px',
//     },
//     brand: {
//         fontSize: '20px',
//         fontWeight: 'bold',
//         color: 'white',
//     },
//     navLinks: {
//         display: 'flex',
//         gap: '15px',
//     },
//     link: {
//         color: 'white',
//         textDecoration: 'none',
//         fontSize: '16px',
//     },
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    EduLearn
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/courses" className="nav-link">
                                Courses
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/add-course" className="nav-link">
                            Add Course
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                            ContactUs
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
