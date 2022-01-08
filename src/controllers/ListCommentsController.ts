import { Request, Response } from "express";
import { ListCommentsService } from "../services/ListCommentsService";

class ListCommentsController {
	async handle(request: Request, response: Response) {
		const take = 3;
		const id = request.params.movie_id;
		const listCommentsService = new ListCommentsService();
		try {
			const movie_id = parseInt(id);
			const comments = await listCommentsService.execute({take,movie_id});
			return response.status(200).json(comments);
		}catch(error) {
			return response.status(400).json(error.message);
		}
	}
}

export {ListCommentsController};