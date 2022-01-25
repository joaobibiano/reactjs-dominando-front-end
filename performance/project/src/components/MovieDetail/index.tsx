import { memo } from "react";
import { IMovie } from "../../App";

type MovieDetailProps = {
  movie: IMovie;
  logToConsole: (movie: IMovie) => void;
};

/**
 * memo
 * compara as props, e se forem iguais, pega do "cache" da memory
 * momoization
 * 1 . Se o nosso componente sempre retorna o mesmo resultado
 * usando as mesmas props, ou seja, se ele é um componente PURO
 * 2. Se esse componente é renderizado com frequência
 * 3. Se ele renderiza normalmente com as mesmas props
 * 4. Se o componente é entre médio e grande
 */

const MovieDetail = ({ movie, logToConsole }: MovieDetailProps) => {
  return (
    <div onClick={() => logToConsole(movie)}>
      {movie.title} - <b>{movie.year}</b>
    </div>
  );
};

// comparar as previous and next props
export default memo(MovieDetail);
// export default MovieDetail;
// export default memo(MovieDetail, (previous, next) => {
//   return previous.movie.title !== next.movie.title;
// });

// sem memo, 13ms
// com memo, 6ms
