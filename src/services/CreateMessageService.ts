import { DB } from "../database/prisma";

interface ICreateMessageService {
	user_id: string;
	text: string;
}
class CreateMessageService {
	async execute({user_id,text} : ICreateMessageService) {
		if(!user_id || !text) {
			throw new Error("400");
		}
		const message = await DB.comment.create({
			data: {
				user_id,
				text
			}
		});
		return message;
	}
}

export {CreateMessageService};