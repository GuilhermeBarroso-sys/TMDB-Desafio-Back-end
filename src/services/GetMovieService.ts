import axios from 'axios';
import { GetPoster } from '../helpers/GetPoster';
type TGetMovie =  {
	title: string;
	release_date: string;
	poster_path: string;
	vote_average: number;
}
interface IGetMovie {
	id: string;
	language: string
}
interface IGetMovieResponse {
	data: TGetMovie;
	poster: string;
}
class GetMovieService {
	async execute({id,language} : IGetMovie) {
		const {data} = await axios.get<TGetMovie>(`${process.env.TMDB_API}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=${language}&append_to_response=videos`);
		const response : IGetMovieResponse = {
			data,
			poster: GetPoster.handle(data.poster_path)
		};
		return response;
	}
}

export {GetMovieService};