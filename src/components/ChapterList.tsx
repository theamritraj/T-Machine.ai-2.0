export default function ChapterList() {
  const chapters = [
    "Evaluate Mathematical Expressions in Python",
    "Find the GCD and LCM of Two Numbers",
    "Convert Decimal to Binary and Hexadecimal",
    "Swap Two Variables Without Temp Variable",
    "Generate Random Numbers Using Python",
  ];

  return (
    <div className="p-6 w-full">
      {chapters.map((title, index) => (
        <div key={index} className="flex items-center justify-between p-3 border-b hover:bg-gray-100">
          <span className="text-lg">📘 Chapter {index + 1}</span>
          <span className="text-gray-600">{title}</span>
        </div>
      ))}
      <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700">
        Start learning
      </button>
    </div>
  );
}
