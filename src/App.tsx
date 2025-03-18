import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CourseSection from "./components/CourseSection";
import Sidebar from "./components/Aside";
import "./styles/app.css";
import CoursePage from "./components/CoursePage";
// import ChapterAccordion from "./components/ChapterAccordion";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <div className="course-container">
          <CourseSection />
          {/* <ChapterAccordion />  */}
          <CoursePage />

        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
