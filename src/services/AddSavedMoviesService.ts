import { DB } from "../database/prisma";
interface IAddSavedMoviesService {
	user_id  : string;
	movie_id : number;
}
class AddSavedMoviesService {
	async execute({user_id,movie_id} : IAddSavedMoviesService) {
		const movie = await DB.savedMovie.create({
			data: {
				movie_id,
				user_id
			}
		});
		return movie;
	}
}

export {AddSavedMoviesService};