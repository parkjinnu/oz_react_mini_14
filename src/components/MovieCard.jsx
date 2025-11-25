import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="p-4 bg-gray-800 rounded cursor-pointer"
      onClick={() => navigate("/details")}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded"
      />
      <h2 className="mt-2 text-white">{movie.title}</h2>
    </div>
  );
};

export default MovieCard;
