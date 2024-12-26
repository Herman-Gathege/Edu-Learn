import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get('http://localhost:5000/courses');
                setCourses(res.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();
    }, []);

    return (
        

        <div className="container mt-5">
            <h1 className="text-center mb-4">Available Courses</h1>
            <Link to="/add-course" className="btn btn-success btn-lg mb-3">Add New Course</Link> {/* Link to Add Course page */}
            <div className="row">
                {courses.map(course => (
                    <div key={course.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{course.title}</h5>
                                <p className="card-text">{course.description}</p>
                                <Link to={`/courses/${course.id}`} className="btn btn-primary">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
