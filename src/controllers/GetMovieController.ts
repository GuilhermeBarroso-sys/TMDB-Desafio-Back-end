import { Request, Response } from "express";
import { GetMovieService } from "../services/GetMovieService";

class GetMovieController {
	async handle(request : Request, response: Response) {
		const language = request.query.language as string;
		const {id} = request.params;
		try {
			const getMovieService = new GetMovieService();
			const movie = await getMovieService.execute({id,language});
			return response.status(200).json(movie);
		} catch(error) {
			const {data, status} = error.response;
			return response.status(status).json(data); 
		}

	}
}

export {GetMovieController};