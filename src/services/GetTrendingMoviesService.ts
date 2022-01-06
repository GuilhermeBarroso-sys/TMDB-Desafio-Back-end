import axios from 'axios';
import { GetPoster } from '../helpers/GetPoster';
type TGetMovieTrending =  {
	title: string;
	release_date: string;
	poster_path: string;
}
interface IGetMovieTrending {
	time_window: string;
	language: string
}
interface IGetTrendingMoviesResponse {
	data: TGetMovieTrending;
	poster: string;
}
class GetTrendingMoviesService {
	async execute({time_window,language} : IGetMovieTrending) {
		const {data} = await axios.get<TGetMovieTrending>(`${process.env.TMDB_API}/trending/movie/${time_window}?api_key=${process.env.TMDB_API_KEY}&language=${language}`);
		const response : IGetTrendingMoviesResponse = {
			data,
			poster: GetPoster.handle(data.poster_path)
		};
		return response;
	}
}
export {GetTrendingMoviesService};