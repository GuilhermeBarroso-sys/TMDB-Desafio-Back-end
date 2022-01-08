import { DB } from "../database/prisma";
interface IAddSavedMoviesService {
	user_id  : string;
	movie_id : number;
}
class AddSavedMoviesService {
	async execute({user_id,movie_id} : IAddSavedMoviesService) {
		const exists = await DB.savedMovie.findFirst({
			where: {
				movie_id,
				user_id
			}
		});
		if(exists) {
			throw new Error("409");
		}
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