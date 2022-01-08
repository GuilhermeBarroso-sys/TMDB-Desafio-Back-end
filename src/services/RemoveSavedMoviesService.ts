import { DB } from "../database/prisma";

interface IRemoveSavedMoviesService {
	user_id  : string;
	movie_id : number;
}
class RemoveSavedMoviesService {
	async execute({user_id,movie_id} : IRemoveSavedMoviesService) {
		const movie = await DB.savedMovie.findFirst( {
			where: {
				user_id,
				AND: {
					movie_id
				}
			},
			select: {
				id: true
			}
		});
		if(!movie) {
			throw new Error("404");
		}
		const {id} = movie;
		const remove = await DB.savedMovie.delete({
			where: {
				id
			}
		});
		return remove;
	}
}

export {RemoveSavedMoviesService};