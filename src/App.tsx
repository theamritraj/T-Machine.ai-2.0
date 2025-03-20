import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CourseSection from "./components/CourseSection";
import Sidebar from "./components/Aside";
import ChapterPage from "./components/ChapterPage"; // New component for chapter details page
import "./styles/app.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Sidebar />
        <div className="course-container">
          <Routes>
            <Route path="/" element={<CourseSection />} />
            <Route path="/chapter/:id" element={<ChapterPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
