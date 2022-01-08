import axios from "axios";
type TGetPopularMovies = {
	title: string;
	release_date: string;
	poster_path: string;
}
class GetPopularMoviesService {
	async execute(language: string) {
		const {data} = await axios.get<TGetPopularMovies>(`${process.env.TMDB_API}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=${language}`);
	
		return data;
	}
}

export {GetPopularMoviesService};