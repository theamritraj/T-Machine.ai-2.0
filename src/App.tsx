import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CourseSection from "./components/CourseSection";
import Sidebar from "./components/Sidebar";
import "./styles/app.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <div className="course-container">
          <CourseSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
