import { Request, Response } from "express";
import { HaveSavedMovieService } from "../services/HaveSavedMovieService";

class HaveSavedMovieController {
	async handle(request: Request, response: Response) {
		const id = request.params.movie_id; 
		const {user_id} = request;
		const haveSavedMovieService = new HaveSavedMovieService();
		try {
			const movie_id = parseInt(id);
			const haveSavedMovice = await haveSavedMovieService.execute({user_id,movie_id});
			return response.status(200).json(haveSavedMovice);
		} catch (error) {
			return response.status(400).json(error.mesasge);
		}
	}
}

export {HaveSavedMovieController};