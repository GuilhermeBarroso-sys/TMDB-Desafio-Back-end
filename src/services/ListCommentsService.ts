import { DB } from "../database/prisma";
interface IListCommentsService {
	take : number
	movie_id: number;
}
class ListCommentsService {
	async execute({take,movie_id} : IListCommentsService) {		
		const comments = await DB.comment.findMany({
			take,
			where: {
				movie_id
			},
			include: {
				user: true
			},
			orderBy: {
				created_at: 'desc'
			}
		});
		return comments;

	}
}

export { ListCommentsService };