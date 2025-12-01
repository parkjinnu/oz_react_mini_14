import { useParams } from "react-router-dom";
import movie from "./movieDetailData.json";
import { useDetailFetch } from "./useFetch";

const MovieDetail = () => {
  const { movie_id } = useParams();
  const { movies } = useDetailFetch(movie_id)
  if (!movies movies.length === 0) 
  }

 
 
  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-3 gap-6">
      <div className="col-span-1">
        <img
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          alt={movies.title}
          className="w-full h-auto rounded shadow-lg"
        />
      </div>

     
      <div className="col-span-2 flex flex-col gap-4">

       
        <div className="flex gap-4">
          <div className="flex-1 bg-teal-800 text-white p-4 text-center rounded">
            <h2 className="text-xl font-bold">{movies.title}</h2>
          </div>
          <div className="w-32 bg-teal-800 text-white p-4 text-center rounded">
            ⭐ {movies.vote_average}
          </div>
        </div>

    
        <div className="bg-teal-800 text-white p-4 rounded text-center text-lg">
          {movie.genres.map((g) => g.name).join(" · ")}
        </div>

        
        <div className="bg-teal-800 text-white p-6 rounded text-center">
          {movies.overview}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
