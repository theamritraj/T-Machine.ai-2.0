import "../styles/courseSection.css";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"


const CourseSection = () => {
  return (
    <>
    <div className="flex items-center justify-between pt-2">
      {/* Python Course Badge */}
      <div className="relative flex items-center">
        <div className="bg-gradient-to-r from-purple-500 to-purple-300 text-white font-semibold py-1 px-3 pr-6 shadow-md relative rounded-l-md">
          Python Course
          <div className="absolute right-0 top-0 h-full w-4 bg-purple-300 clip-path-triangle"></div>
        </div>
      </div>

      {/* Start Learning Button */}
      <button className="bg-gradient-to-r from-purple-300 to-purple-500 text-white font-semibold py-1 px-4 rounded-full shadow-md hover:opacity-90 transition">
        Start learning
      </button>
    </div>

    {/* Course Section */}
    <div className="course-section">
      <div>
       <span id="cptn">chapter No</span>
       <div  className="chapter">
       <img
        src="./src/assets/courseSection/book.png"
        alt="book"
        className="book"
      />
        <span>chapter - 1</span>
        <i className="fa-solid fa-angle-down"></i>
       </div>
       <div  className="chapter">
       <img
        src="./src/assets/courseSection/book.png"
        alt="book"
        className="book"
      />
        <span>chapter - 2</span>
        <i className="fa-solid fa-angle-down"></i>
       </div>

       <div  className="chapter">
       <img
        src="./src/assets/courseSection/book.png"
        alt="book"
        className="book"
      />
        <span>chapter - 3</span>
        <i className="fa-solid fa-angle-down"></i>
       </div>

       <div  className="chapter">
       <img
        src="./src/assets/courseSection/book.png"
        alt="book"
        className="book"
      />
        <span>chapter - 4</span>
        <i className="fa-solid fa-angle-down"></i>
       </div>

       <div  className="chapter">
       <img
        src="./src/assets/courseSection/book.png"
        alt="book"
        className="book"
      />
        <span>chapter - 5</span>
        <i className="fa-solid fa-angle-down"></i>
       </div>
       
      </div>
      <div className="chapter-no">
        <span id="cptn">Chapter</span>

        <div className="chapter-content">
        Evaluate Mathematical Expressions in Python 
        </div>


        <div className="chapter-content">
        Find the GCD and LCM of Two Numbers 
        </div>


        <div className="chapter-content">
        Convert Decimal to Binary and Hexadecimal 
        </div>


        <div className="chapter-content">
        Swap Two Variables Without Temp Variable 
        </div>


        <div className="chapter-content">
        Generate Random Numbers Using Python 
        </div>


        

      </div>
      </div>
    
    </>
  );
};

export default CourseSection;
