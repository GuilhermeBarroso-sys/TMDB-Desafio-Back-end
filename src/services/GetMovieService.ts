import axios from 'axios';
type TGetMovie =  {
	title: string;
	release_date: string;
	poster_path: string;
	vote_average: number;
	adult: boolean;
}
interface IGetMovie {
	id: string;
	language: string
}
class GetMovieService {
	async execute({id,language} : IGetMovie) {
		const {data} = await axios.get<TGetMovie>(`${process.env.TMDB_API}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=${language}&append_to_response=videos`);
		return data;
	}
}

export {GetMovieService};