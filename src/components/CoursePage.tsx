import { useState, useEffect } from "react";

const data = {
  "chapters": [
    {
      "id": 1,
      "name": "Evaluate Mathematical Expressions in Python",
      "topics": [
        {
          "id": 1,
          "name": "Merge Two Lists Without Using Extend",
          "subtopics": [
            "Combine two lists using loops, the + operator, or the ...",
            "Combine two lists using loops, the + operator, or the ...",
            "Combine two lists using loops, the + operator, or the ..."
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Find the GCD and LCM of Two Numbers",
      "topics": []
    }
  ]
};

interface Topic {
  id: number;
  name: string;
  subtopics: string[];
}

interface Chapter {
  id: number;
  name: string;
  topics: Topic[];
}

const CoursePage = () => {
  const [courseData, setCourseData] = useState<Chapter[]>([]);
  const [expandedChapters, setExpandedChapters] = useState<{[key: number]: boolean}>({});
  const [expandedTopics, setExpandedTopics] = useState<{[key: number]: boolean}>({});

  useEffect(() => {
    // Simulating fetching JSON data
    setCourseData(data.chapters);
  }, []);

  interface ExpandedState {
    [key: number]: boolean;
  }

  const toggleChapter = (id: number) => {
    setExpandedChapters((prev: ExpandedState) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTopic = (id: number) => {
    setExpandedTopics((prev: ExpandedState) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-purple-600">Python Course</h1>
      <div className="mt-4">
        {courseData.map((chapter) => (
          <div key={chapter.id} className="bg-white p-4 mb-4 shadow rounded-lg">
            <h2
              className="text-xl font-semibold text-blue-600 cursor-pointer"
              onClick={() => toggleChapter(chapter.id)}
            >
              Chapter {chapter.id}: {chapter.name}
            </h2>
            {expandedChapters[chapter.id] && (
              <div className="ml-4">
                {chapter.topics.map((topic) => (
                  <div key={topic.id} className="mt-3 p-3 bg-yellow-100 rounded">
                    <h3
                      className="text-lg font-medium text-yellow-700 cursor-pointer"
                      onClick={() => toggleTopic(topic.id)}
                    >
                      Topic {topic.id}: {topic.name}
                    </h3>
                    {expandedTopics[topic.id] && (
                      <div className="ml-4">
                        {topic.subtopics.map((sub, index) => (
                          <div key={index} className="ml-4 p-2 bg-orange-100 mt-2 rounded">
                            <p className="text-sm text-orange-700">{sub}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;