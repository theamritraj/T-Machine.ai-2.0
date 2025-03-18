import React, { useState } from "react";

interface Subtopic {
  title: string;
  description?: string;
}

interface AccordionProps {
  topic: string;
  subtopics: Subtopic[];
}

const Accordion: React.FC<AccordionProps> = ({ topic, subtopics }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-purple-300">
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-yellow-200 hover:bg-yellow-300 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-purple-700">{topic}</span>
        <i className={`fa-solid fa-angle-${isOpen ? "up" : "down"}`}></i>
      </div>

      {isOpen && (
        <div className="bg-yellow-100 p-4">
          {subtopics.map((subtopic, index) => (
            <div key={index} className="py-1 text-gray-700">
              <strong>{subtopic.title}:</strong> {subtopic.description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
