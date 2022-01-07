import { Request, Response } from "express";
import { GetPopularMoviesService } from "../services/GetPopularMoviesService";

class GetPopularMoviesController {
	async handle(request: Request, response: Response) {
		const language = request.query.language as string;
		const getPopularMoviesService = new GetPopularMoviesService();
		try {
			const popularMovies = await getPopularMoviesService.execute(language);
			return response.status(200).json(popularMovies);
		} catch(error) {
			const {data, status} = error.response;
			return response.status(status).json(data); 
		}
	}
}

export { GetPopularMoviesController };