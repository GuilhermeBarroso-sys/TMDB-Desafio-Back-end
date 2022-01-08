import { Router } from 'express';
import { GetPopularMoviesController } from '../controllers/GetPopularMoviesController';
import { GetMovieController } from '../controllers/GetMovieController';
import { GetTrendingMoviesController } from '../controllers/GetTrendingMoviesController';
import { SearchMovieController } from '../controllers/SearchMovieController';
import { RegisterUserController } from '../controllers/RegisterUserController';
import { AuthenticateController } from '../controllers/AuthenticateController';
import { CreateMessageController } from '../controllers/CreateMessageController';
import { EnsureAuthenticated } from '../middleware/EnsureAuthenticated';
import { ListCommentsController } from '../controllers/ListCommentsController';
import { AddSavedMoviesController } from '../controllers/AddSavedMoviesController';
import { ListSavedMoviesController } from '../controllers/ListSavedMoviesController';
import { RemoveSavedMoviesController } from '../controllers/RemoveSavedMoviesController';
import { HaveSavedMovieController } from '../controllers/HaveSavedMovieController';
const routes = Router();

routes.get('/comment/:movie_id', new ListCommentsController().handle);
routes.get('/findMovie/:id', new GetMovieController().handle);
routes.get('/popularMovies', new GetPopularMoviesController().handle);
routes.get('/savedMovie', EnsureAuthenticated, new ListSavedMoviesController().handle);
routes.get('/searchMovie', new SearchMovieController().handle);
routes.get('/trendingMovies', new GetTrendingMoviesController().handle);
routes.get('/haveThisMovie/:movie_id', EnsureAuthenticated, new HaveSavedMovieController().handle);

routes.post('/authenticate', new AuthenticateController().handle);
routes.post('/comment', EnsureAuthenticated , new CreateMessageController().handle);
routes.post('/savedmovie', EnsureAuthenticated, new AddSavedMoviesController().handle);
routes.post('/user', new RegisterUserController().handle);

routes.delete('/savedmovie/:movie_id', EnsureAuthenticated, new RemoveSavedMoviesController().handle);
export default routes;
//