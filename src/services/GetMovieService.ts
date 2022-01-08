import axios from 'axios';
type TGetMovie =  {
	title: string;
	release_date: string;
	overview: string;
	runtime: number;
	genres: [{
		id: string;
		name: string;
	}]
	poster_path: string;
	vote_average: number;
}
interface IGetMovie {
	id: string;
	language?: string
}
class GetMovieService {
	async execute({id,language} : IGetMovie) {
		const {data} = await axios.get<TGetMovie>(`${process.env.TMDB_API}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=${language}`);
		return data; 
	}
}

export {GetMovieService};