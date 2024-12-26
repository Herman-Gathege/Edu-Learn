import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddCourse() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCourse = {
            title,
            description,
            content,
        };

        try {
            const res = await axios.post('http://localhost:5000/courses', newCourse);
            console.log(res.data);
            // Redirect to the courses list page after successful submission
            navigate.push('/courses');
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };

    return (
        <div className="container mb-5">
            <h1>Add New Course</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Course Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Course Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Course Content</label>
                    <textarea
                        className="form-control"
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-success btn-lg mb-3">
                    Add Course
                </button>
            </form>
        </div>
    );
}

export default AddCourse;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function AddCourse() {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [content, setContent] = useState('');
//     const [file, setFile] = useState(null); // New state for file upload
//     const navigate = useNavigate();

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const newCourse = {
//             title,
//             description,
//             content,
//         };

//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('description', description);
//         formData.append('content', content);
//         if (file) formData.append('file', file); // Append file to form data

//         try {
//             const res = await axios.post('http://localhost:5000/courses', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data', // Set the correct content type for file upload
//                 },
//             });
//             console.log(res.data);
//             // Redirect to the courses list page after successful submission
//             navigate('/courses');
//         } catch (error) {
//             console.error('Error adding course:', error);
//         }
//     };

//     return (
//         <div className="container mb-5">
//             <h1>Add New Course</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="title">Course Title</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="title"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="description">Course Description</label>
//                     <textarea
//                         className="form-control"
//                         id="description"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         required
//                     ></textarea>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="content">Course Content</label>
//                     <textarea
//                         className="form-control"
//                         id="content"
//                         value={content}
//                         onChange={(e) => setContent(e.target.value)}
//                         required
//                     ></textarea>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="file">Upload Course Content (PDF/DOC)</label>
//                     <input
//                         type="file"
//                         className="form-control"
//                         id="file"
//                         accept=".pdf,.doc,.docx"
//                         onChange={handleFileChange}
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-success btn-lg mb-3">
//                     Add Course
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default AddCourse;
