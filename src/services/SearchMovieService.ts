import axios from 'axios';
import { GetPoster } from '../helpers/GetPoster';
type TSearchMovie =  {
	results: [{
		id: string;
		title: string,
		release_date: string,
		poster_path: string;
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
  
class SearchMovieService {
	async execute(query: string) {
		const search = query.split(' ').join('+');
		const {data} = await axios.get<TSearchMovie>(`${process.env.TMDB_API}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${search}`);
		const {results} = data;
		const movies : ISearchMovieResponse[] = [];
		results.forEach((data) => {
			movies.push({
				data,
				poster: GetPoster.handle(data.id)
			});
		});
		return data;
	}
}

export { SearchMovieService };