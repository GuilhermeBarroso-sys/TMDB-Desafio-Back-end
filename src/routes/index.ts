import {Router} from 'express';
import { GetPopularMoviesController } from '../controllers/GetPopularMoviesController';
import { GetMovieController } from '../controllers/GetMovieController';
import { GetTrendingMoviesController } from '../controllers/GetTrendingMoviesController';
import { SearchMovieController } from '../controllers/SearchMovieController';
const routes = Router();

routes.get('/trendingMovies', new GetTrendingMoviesController().handle);
routes.get('/findMovie/:id', new GetMovieController().handle);
routes.get('/searchMovie', new SearchMovieController().handle);
routes.get('/popularMovies', new GetPopularMoviesController().handle);


export default routes;