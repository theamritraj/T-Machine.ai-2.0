import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/courseSection.css";
import Modal from "../components/Modal";
//import TopicSection from "../components/TopicSection";

interface Topic {
  type: string;
  title: string;
  isMiniTask?: boolean;
  isChallengingTask?: boolean;
}

interface Chapter {
  title: string;
  image: string;
  topics: Topic[];
}

interface CourseData {
  course: string;
  chapters: Chapter[];
}

const CourseSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [activeChevron, setActiveChevron] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/src/data/courseData.json")
      .then((res) => res.json())
      .then((data) => setCourseData(data[0]))
      .catch((err) => console.error("Failed to load course data:", err));
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChapterClick = (index: number) => {
    setActiveChevron(index);
    navigate(`/chapter/${index + 1}`);
  };

  if (!courseData) return <div>Loading...</div>;

  return (
    <>
      <div className="flex items-center justify-between pt-2">
        <div className="relative flex items-center">
          <div className="bg-gradient-to-r from-purple-500 to-purple-300 text-white font-semibold py-1 px-3 pr-6 shadow-md relative-md">
            {courseData.course}
            <div className="absolute right-0 top-0 h-full w-4 bg-purple-300 clip-path-triangle"></div>
          </div>
        </div>

        <button
          onClick={openModal}
          className="bg-gradient-to-r from-purple-300 to-purple-500 text-white font-semibold py-1 px-4 rounded-full shadow-md hover:opacity-90 transition mr-4"
        >
          Start learning
        </button>
      </div>

      <div className="course-section">
        <div>
          <span id="cptn">Chapter No</span>
          {courseData.chapters.map((chapter, index) => (
            <div key={index}>
              <div
                className="chapter"
                onClick={() => handleChapterClick(index)}
              >
                <img src={chapter.image} alt="book" className="book" />
                <span>Chapter - {index + 1}</span>
                <i
                  className={`fa-solid ${
                    activeChevron === index
                      ? "fa-chevron-down"
                      : "fa-chevron-up"
                  } icon-toggle`}
                ></i>
              </div>
            </div>
          ))}
        </div>

        <div className="chapter-no">
          <span id="cptn">Chapter</span>
          {courseData.chapters.map((chapter, index) => (
            <div key={index} className="chapter-content">
              {chapter.title}
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default CourseSection;