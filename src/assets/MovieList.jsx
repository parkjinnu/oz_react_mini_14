import MovieCard from "../componants/MovieCard";
import useFetch from "./useFanch";
const MovieList = () => {
  const { movies } = useFetch();
console.log(movies);

  return (
    <div className="bg-gray-900 min-h-screen p-10">

      <div className="grid grid-cols-5 gap-6 justify-items-center"
      >
        {movies.length !== - &&
        movies.results.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>

      );
    };

export default MovieList;
