import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function CourseDetail() {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/courses/${courseId}`);
                setCourse(res.data);
            } catch (error) {
                console.error('Error fetching course:', error);
            }
        };
        fetchCourse();
    }, [courseId]);

    if (!course) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5">
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <div>{course.content}</div>
            <Link to="/courses" className="btn btn-secondary mt-4">
                Back to Courses
            </Link>
        </div>
    );
}

export default CourseDetail;
