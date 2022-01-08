import { DB } from "../database/prisma";
interface ICreateMessageService {
	user_id: string;
	movie_id: number;
	text: string;
}
class CreateMessageService {
	async execute({user_id,movie_id,text} : ICreateMessageService) {
		if(!user_id || !text) {
			throw new Error("400");
		}
		const message = await DB.comment.create({
			data: {
				movie_id,
				user_id,
				text
			}
		});
		return message;
	}
}

export {CreateMessageService};