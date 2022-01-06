import { Request, Response } from "express";
import { GetTrendingMoviesService } from "../services/GetTrendingMoviesService";
class GetTrendingMoviesController {
	async handle(request: Request, response: Response) {
		const language = request.query.language as string;
		const time_window = request.query.time_window as string;
		const getTrendingMoviesService = new GetTrendingMoviesService();
		try {
			const trendingMovies = await getTrendingMoviesService.execute({time_window,language});
			return response.status(200).json(trendingMovies);
		} catch(error) {
			const {data, status} = error.response;
			return response.status(status).json(data); 
		}
	}
}
export {GetTrendingMoviesController};