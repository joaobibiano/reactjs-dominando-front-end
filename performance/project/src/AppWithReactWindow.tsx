import { useCallback, useEffect, useState, useMemo } from "react";
import MovieDetail from "./components/MovieDetail";
import { FixedSizeList as List } from "react-window";

export interface IMovie {
  id: string;
  title: string;
  year: string;
}

function App() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3333/movies?title_like=${input}`)
      .then((r) => r.json())
      .then((data) => {
        setMovies(data);
      });
  }, [input]);

  // sem o useCallback
  // render 1 = memória %123
  // render 2 = memória %434

  // com o useCallback
  // render 1 = memória %888
  // render 2 = memória %888
  const logMovie = useCallback((movie: IMovie) => {
    console.log(`movie >>`, movie);
  }, []);

  const averageMemo = useMemo(() => {
    const sum = movies.reduce(
      (total, movie) => total + parseInt(movie.year, 10),
      0
    );
    return sum / movies.length;
  }, [movies]);

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const movie = movies[index];

    return (
      <div style={style}>
        {movie.title} - <b>{movie.year}</b>
      </div>
    );
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
      />
      <div>Year's average: {averageMemo}</div>

      <List height={200} itemCount={movies.length} itemSize={35} width={300}>
        {Row}
      </List>
      {/* {movies.map((movie) => (
        <MovieDetail key={movie.id} movie={movie} logToConsole={logMovie} />
      ))} */}
    </div>
  );
}

export default App;
