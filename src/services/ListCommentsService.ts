import { DB } from "../database/prisma";

class ListCommentsService {
	async execute(take : number) {		
		const comments = await DB.comment.findMany({
			take,
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