import { useParams } from "react-router-dom";
import "../styles/chapterPage.css";

const ChapterPage = () => {
  const { id } = useParams();

  return (
    <div className="chapter-page">
      <h1>Chapter {id}</h1>
      <p>Here’s where you render topics like in the image!</p>
    </div>
  );
};

export default ChapterPage;
