import axios from 'axios';
type TSearchMovie =  {
	results: [{
		id: string;
		title: string,
		release_date: string,
		poster_path: string,
		adult: boolean
	}]
}
type TSearchMovieData = {
	id: string;
	title: string,
	release_date: string,
	poster_path: string;
}
interface ISearchMovieResponse {
	data: TSearchMovieData,
	poster?: string
	
}
interface ISearchMovieService {
	query:string;
	language: string;
}
class SearchMovieService {
	async execute({query,language} : ISearchMovieService) {
		const {data} = await axios.get<TSearchMovie>(`${process.env.TMDB_API}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}&language=${language}`);
		const {results} = data;
		const movies : ISearchMovieResponse[] = [];
		results.forEach((data) => {
			movies.push({
				data,
			});
		});
		return data;
	}
}

export { SearchMovieService };