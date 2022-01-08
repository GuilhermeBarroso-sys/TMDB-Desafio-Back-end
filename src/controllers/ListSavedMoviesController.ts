import { Request, Response } from "express";
import { ListSavedMoviesService } from "../services/ListSavedMoviesService";

class ListSavedMoviesController {
	async handle(request : Request, response : Response) {
		const {user_id} = request;
		const language = request.query.language as string;
		const listSavedMoviesService = new ListSavedMoviesService();
		try {
			const movies = await listSavedMoviesService.execute({user_id,language});
			return response.status(200).json(movies);
		} catch(err) {
			return response.status(400).json(err.message);
		}
	}
}

export {ListSavedMoviesController};