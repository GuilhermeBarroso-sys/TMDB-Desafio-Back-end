import { Request, Response } from "express";
import { AddSavedMoviesService } from "../services/AddSavedMoviesService";

class AddSavedMoviesController {
	async handle(request : Request, response: Response) {
		const addSavedMovieService = new AddSavedMoviesService();
		const {user_id} = request;
		const {movie_id} = request.body;
		try {
			const movie = await addSavedMovieService.execute({user_id,movie_id});
			return response.status(201).json(movie);
		} catch(error) {
			return response.status(404).json("User or Movie not found!");
		}
	}
}

export {AddSavedMoviesController};