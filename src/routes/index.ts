import {Router} from 'express';
import { GetPopularMoviesController } from '../controllers/GetPopularMoviesController';
import { GetMovieController } from '../controllers/GetMovieController';
import { GetTrendingMoviesController } from '../controllers/GetTrendingMoviesController';
import { SearchMovieController } from '../controllers/SearchMovieController';
import { RegisterUserController } from '../controllers/RegisterUserController';
import { AuthenticateController } from '../controllers/AuthenticateController';
import { CreateMessageController } from '../controllers/CreateMessageController';
import { EnsureAuthenticated } from '../middleware/EnsureAuthenticated';
import { ListCommentsController } from '../controllers/ListCommentsController';
const routes = Router();

routes.get('/comment', new ListCommentsController().handle);
routes.get('/findMovie/:id', new GetMovieController().handle);
routes.get('/popularMovies', new GetPopularMoviesController().handle);
routes.get('/searchMovie', new SearchMovieController().handle);
routes.get('/trendingMovies', new GetTrendingMoviesController().handle);

routes.post('/authenticate', new AuthenticateController().handle);
routes.post('/comment', EnsureAuthenticated , new CreateMessageController().handle);
routes.post('/register', new RegisterUserController().handle);
routes.post('/user', new RegisterUserController().handle);
export default routes;
//