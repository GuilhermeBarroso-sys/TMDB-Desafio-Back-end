import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
	async handle(request: Request, response: Response) {
		const {user_id} = request;
		const {text} = request.body;
		const id = request.body.movie_id;
		const createMessageService = new CreateMessageService();
		const movie_id = parseInt(id);
		try {
			const message = await createMessageService.execute({user_id,text, movie_id});
			return response.status(201).json(message);
		} catch(error) {
			return response.status(400).json("Missing Fields!");
		}
	}
}

export {CreateMessageController};