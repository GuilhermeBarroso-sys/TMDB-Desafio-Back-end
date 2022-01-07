import { Request, Response } from "express";
import { ListCommentsService } from "../services/ListCommentsService";

class ListCommentsController {
	async handle(request: Request, response: Response) {
		const listCommentsService = new ListCommentsService();
		try {
			const comments = await listCommentsService.execute(3);
			return response.status(200).json(comments);
		}catch(error) {
			return response.status(400).json(error.message);
		}
	}
}

export {ListCommentsController};