import { useState } from "react";
import "../styles/courseSection.css";

const ChapterAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full p-4">
      {/* Accordion Header */}
      <div
        className={`flex items-center justify-between p-3 rounded-md cursor-pointer shadow-md ${
          isOpen ? "bg-purple-300" : "bg-gray-100"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <img
            src="./src/assets/courseSection/book.png"
            alt="book"
            className="w-8 h-8"
          />
          <span className="text-lg font-semibold font-[Poppins] text-gray-700">
            Chapter - 1
          </span>
        </div>

        <i
          className={`fas fa-chevron-${
            isOpen ? "up" : "down"
          } text-gray-600 transition-transform duration-200`}
        ></i>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="bg-purple-100 p-3 rounded-b-md shadow-md text-gray-700">
          <p className="text-sm font-[Poppins]">Evaluate Mathematical Expressions in Python</p>
        </div>
      )}
    </div>
  );
};

export default ChapterAccordion;
