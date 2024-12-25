import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Courses from "./components/Courses";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import CourseDetail from "./components/CourseDetail";
import AddCourse from './components/AddCourse';  // Import the AddCourse component


function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/courses/:courseId" component={CourseDetail} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/add-course" element={<AddCourse />} />  {/* Add route for the add course page */}
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
