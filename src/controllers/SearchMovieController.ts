import { Request, Response } from "express";
import { SearchMovieService } from "../services/SearchMovieService";
class SearchMovieController {
	async handle(request : Request, response : Response) {
		const query = request.query.query as string;
		const language = request.query.language as string;
		const searchMovieService = new SearchMovieService();
		try {
			const result = await searchMovieService.execute({query, language});
			return response.status(200).json(result);
		}catch(error) {
			const {data, status} = error.response;
			return response.status(status).json(data); 
		}
	}
}
export { SearchMovieController };