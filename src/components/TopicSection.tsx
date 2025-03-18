import React from "react";
import "../styles/topicSection.css";

interface Topic {
  type: string;
  title: string;
  isMiniTask?: boolean;
  isChallengingTask?: boolean;
}

interface TopicSectionProps {
  topics: Topic[];
}

const TopicSection: React.FC<TopicSectionProps> = ({ topics }) => {
  return (
    <div className="topic-section">
      <span id="cptn">Topic No</span>
      {topics.map((topic, index) => (
        <div
          key={index}
          className={`topic-item ${
            topic.isMiniTask ? "mini-task" : topic.isChallengingTask ? "challenging-task" : ""
          }`}
        >
          <span>{topic.type} - {index + 1}</span>
          <span>{topic.title}</span>
          {topic.isMiniTask && (
            <span className="task-note">
              There will be a mini task after the topic. Complete it to proceed to the next topic.
            </span>
          )}
          {topic.isChallengingTask && (
            <span className="task-note">
              There will be a final challenging task after this topic. Complete it to proceed to the next chapter.
            </span>
          )}
          <i className="fa-solid fa-info-circle"></i>
        </div>
      ))}
    </div>
  );
};

export default TopicSection;
