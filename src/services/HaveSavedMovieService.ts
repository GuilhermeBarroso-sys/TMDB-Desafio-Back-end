import { DB } from "../database/prisma";

interface IHaveSavedMovieService {
	user_id  : string;
	movie_id : number;
}
class HaveSavedMovieService {
	async execute({user_id,movie_id} : IHaveSavedMovieService) {
		const movie = await DB.savedMovie.findFirst({
			where: {
				movie_id,
				AND: {
					user_id
				}
			}
		});
		if(!movie) {
			return false;
		}
		return true;
	}
}

export {HaveSavedMovieService};