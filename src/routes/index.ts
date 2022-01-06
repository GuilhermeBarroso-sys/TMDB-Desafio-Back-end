import {Router} from 'express';
import { GetMovieController } from '../controllers/GetMovieController';
import { GetTrendingMoviesController } from '../controllers/GetTrendingMoviesController';
import { SearchMovieController } from '../controllers/SearchMovieController';
const routes = Router();

routes.get('/trendingMovies', new GetTrendingMoviesController().handle);
routes.get('/findMovie/:id', new GetMovieController().handle);
routes.get('/searchMovie', new SearchMovieController().handle);

export default routes;