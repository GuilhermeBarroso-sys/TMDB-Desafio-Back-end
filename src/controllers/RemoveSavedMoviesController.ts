import { Request, Response } from "express";
import { RemoveSavedMoviesService } from "../services/RemoveSavedMoviesService";

class RemoveSavedMoviesController {
	async handle(request : Request, response: Response) {
		const {user_id} =  request;
		const id = request.params.movie_id;
		const movie_id = parseInt(id);
		const removeSavedMoviesService = new RemoveSavedMoviesService();
		try {
			await removeSavedMoviesService.execute({user_id,movie_id});
			return response.status(204).send();
		} catch(error) {
			const status = error.message;
			if(status == "404") {
				return response.status(404).json("Movie not found!");
			}
			return response.status(400).json(error.message);
		}
	}
}

export {RemoveSavedMoviesController};