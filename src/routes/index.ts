import {Router} from 'express';
import { GetTrendingMoviesController } from '../controllers/GetTrendingMoviesController';
const routes = Router();

routes.get('/trendingMovies', new GetTrendingMoviesController().handle);

export default routes;