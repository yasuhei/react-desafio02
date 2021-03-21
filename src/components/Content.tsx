import '../styles/content.scss';
import { MovieCard } from './MovieCard';


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'document' | 'drama'| 'horror'| 'family'; 
  title: string
};
interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
};

interface ContentProps {
  selectedGenre: GenreResponseProps
  movies: Array<MovieProps>
};
export function Content({ selectedGenre, movies}: ContentProps) {
  // Complete aqui

  return(
    <div className='container'>
      <header>
        <span className='categoria'>Categoria:<span>{selectedGenre.title}</span></span>
      </header>

      <main>
        <div className='movies-list'>
          {movies.map((movies: MovieProps) => (
            <MovieCard key={movies.Title} title={movies.Title} poster={movies.Poster} runtime={movies.Runtime} rating={movies.Ratings[0].Value} />
          )) }

        </div>
      </main>

    </div>
  )
}