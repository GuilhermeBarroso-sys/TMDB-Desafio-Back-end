import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
	async handle(request: Request, response: Response) {
		const {user_id} = request;
		const {text} = request.body;
		const createMessageService = new CreateMessageService();
		try {
			const message = await createMessageService.execute({user_id,text});
			return response.status(201).json(message);
		} catch(error) {
			return response.status(400).json("Missing Fields!");
		}
	}
}

export {CreateMessageController};