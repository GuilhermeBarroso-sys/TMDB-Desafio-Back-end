import { Request, Response } from "express";
import { SearchMovieService } from "../services/SearchMovieService";
class SearchMovieController {
	async handle(request : Request, response : Response) {
		const query = request.query.query as string;
		try {
			const searchMovieService = new SearchMovieService();
			const result = await searchMovieService.execute(query);
			return response.status(200).json(result);
		}catch(error) {
			const {data, status} = error.response;
			return response.status(status).json(data); 
		}
	}
}
export { SearchMovieController };