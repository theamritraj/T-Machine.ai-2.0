import { useState } from "react";
import "../styles/chapterAccordian.css";
import Modal from "../components/Modal";
import Accordion from 'react-bootstrap/Accordion';


interface CourseData {
  chapters: { title: string }[];
}

const courseData: CourseData = {
  chapters: [
    { title: "Introduction to Python" },
  ],
};

const ChapterAccordion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
     <div className="flex items-center justify-between pt-2">
        {/* Python Course Badge */}
        <div className="relative flex items-center">
          <div className="bg-gradient-to-r from-purple-500 to-purple-300 text-white font-semibold py-1 px-3 pr-6 shadow-md relative-md">
            Python Course
            <div className="absolute right-0 top-0 h-full w-4 bg-purple-300 clip-path-triangle"></div>
          </div>
        </div>

        {/* Start Learning Button */}
        <button
          onClick={openModal}
          className="bg-gradient-to-r from-purple-300 to-purple-500 text-white font-semibold py-1 px-4 rounded-full shadow-md hover:opacity-90 transition"
        >
          Start learning
        </button>
      </div>


     
      <div className="course-section">
      <div>
      <span id="cptn">Chapter No</span>
      <Accordion>
         <Accordion.Item eventKey="0">
           <Accordion.Header>Accordion Item </Accordion.Header>
           <Accordion.Body>
              <div className="subchapter">
                <div>Chapter - 1</div>
                <div>Chapter - 2</div>
                <div>Chapter - 3</div>
                <div>Chapter - 4</div>
                <div>Chapter - 5</div>
                
              </div>
           </Accordion.Body>
         </Accordion.Item>
      </Accordion>
      </div>

        {/* Dynamic Chapter Content */}
        <div className="chapter-no">
          <span id="cptn">Chapter</span>
          {courseData.chapters.map((chapter, index) => (
            <div key={index} className="chapter-content">
              {chapter.title}
            </div>
          ))}
        </div>
      </div>




      

    


    {/* Modal Component */}
    <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default ChapterAccordion
