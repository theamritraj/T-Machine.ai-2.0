const Sidebar = () => {
  return (
    <div className="w-48 bg-purple-100 h-screen p-4 shadow-md">
      <h2 className="text-lg font-semibold text-purple-600">Python Course</h2>
      <ul className="mt-4">
        {["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"].map((chapter, index) => (
          <li
            key={index}
            className={`p-2 my-2 ${
              index === 0 ? "bg-purple-200 text-purple-700 font-semibold" : "hover:bg-purple-50"
            }`}
          >
            {chapter}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;
