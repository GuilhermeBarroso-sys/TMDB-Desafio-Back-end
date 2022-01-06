import axios from 'axios';
import { stringify } from 'flatted';
// type IMovieTrending =  {
// 	title: string;
// 	release_date: string;
// 	poster_path: string;
// 	vote_average: number;
// }
interface IGetTrendingMovies {
	time_window: string;
	language: string
}
class GetTrendingMoviesService {
	async execute({time_window,language} : IGetTrendingMovies) {
		const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${process.env.TMDB_API_KEY}&${language}`);
		return data;
	}
}
export {GetTrendingMoviesService};