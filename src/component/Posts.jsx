import { useParams } from "react-router-dom";

export default function Posts() {
  const { category, topic } = useParams();

  return (
    <h1>
      This is the Posts -{category} / {topic}
    </h1>
  );
}
