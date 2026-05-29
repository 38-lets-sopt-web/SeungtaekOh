import { useParams } from "react-router-dom";

function MovieDetailPage() {
  const { movieId } = useParams();

  return <main>영화 상세 페이지 {movieId}</main>;
}

export default MovieDetailPage;
