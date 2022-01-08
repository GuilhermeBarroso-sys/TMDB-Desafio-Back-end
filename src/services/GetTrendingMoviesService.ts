import axios from 'axios';
type TGetMovieTrending =  {
	title: string;
	release_date: string;
	poster_path: string;
}
interface IGetMovieTrending {
	time_window: string;
	language: string
}
class GetTrendingMoviesService {
	async execute({time_window,language} : IGetMovieTrending) {
		const {data} = await axios.get<TGetMovieTrending>(`${process.env.TMDB_API}/trending/movie/${time_window}?api_key=${process.env.TMDB_API_KEY}&language=${language}`);
		return data;
	}
}
export {GetTrendingMoviesService};