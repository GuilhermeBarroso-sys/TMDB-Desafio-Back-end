import { DB } from "../database/prisma";
import { GetMovieService } from "./GetMovieService";
interface IListSavedMoviesService {
	user_id : string
	language?: string;
}
type TGetMovie =  {
	title: string;
	release_date: string;
	poster_path: string;
	vote_average: number;
}
class ListSavedMoviesService {
	async execute({user_id,language}:IListSavedMoviesService) {
		const movies = await DB.savedMovie.findMany({
			where: {
				user_id
			},
			select: {
				movie_id: true
			}
		});
		if(!movies) {
			return false;
		}  
		const getMovieService = new GetMovieService();
		const moviesResult : Array<TGetMovie> = [] ;
		for(let i = 0; i < movies.length; i++) {
			const id = movies[i].movie_id.toString();
			const movie = await getMovieService.execute({id, language});
			moviesResult.push(movie);
		}
		return moviesResult;
	}
}

export {ListSavedMoviesService};