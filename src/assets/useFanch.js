import { useEffect, useState } from "react";

const useFatch = () => {
    const {movies, setMovies} = useState([]);
    const options = {

    method: "GET",
    headers: {
        accept: "application.json",
        Authozization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTdmYjZjMTY0YWNmMmRkNDc2MGEyODM0NzY5MTgxZSIsIm5iZiI6MTc2MzUzMDg0Mi41MDcsInN1YiI6IjY5MWQ1ODVhYjFlOTEyNWRkY2ZjMWUxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r8b0Jb0VOLjnsLuAnmkYrur0Rn62wYRQC3lsNxZ3iQU"
    },
    };

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            options
        )
    .then((res) => res.json())
    .then((data) => setMovies(data))
    .catch((err) => console.error(err));
    }, []);
    return { movies };
   }
   export default useFatch;









}