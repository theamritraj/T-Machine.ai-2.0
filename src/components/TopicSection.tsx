interface Topic {
  type: string;
  title: string;
  isMiniTask?: boolean;
  isChallengingTask?: boolean;
}

interface TopicSectionProps {
  topics: Topic[];
}

const TopicSection = ({ topics }: TopicSectionProps) => {
  return (
    <div className="mt-2 border border-yellow-300 bg-yellow-100 p-2 rounded-md">
      <div className="grid grid-cols-2 font-bold text-yellow-700 mb-2">
        <span>Topic No</span>
        <span>Topic</span>
      </div>
      {topics.map((topic, index) => (
        <div
          key={index}
          className={`flex items-center justify-between p-2 mb-1 rounded-md shadow-sm cursor-pointer
            ${topic.isMiniTask ? "bg-pink-200 text-pink-700 font-medium" : ""}
            ${topic.isChallengingTask ? "bg-red-200 text-red-700 font-medium" : "bg-yellow-200 text-yellow-700"}
          `}
        >
          <span className="font-medium">{topic.type}</span>
          <span>{topic.title}</span>
        </div>
      ))}
    </div>
  );
};

export default TopicSection;
