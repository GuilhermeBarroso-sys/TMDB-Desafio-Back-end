import { Request, Response } from "express";
import { AuthenticateService } from "../services/AuthenticateService";

class AuthenticateController {
	async handle(request: Request, response: Response) {
		const {email,password} = request.body;
		const authenticateService = new AuthenticateService();
		try {
			const authenticated = await authenticateService.execute({email,password});
			return response.status(200).json(authenticated);
		} catch(error) {
			const status = error.message;
			if(status == "404") {
				return response.status(404).json("User doesn't exists!");
			} 
			if(status == "401") {
				return response.status(401).json("Invalid credentials!");
			} else {
				return response.status(400).json("Missing required fields!");
			}
		}
	}
}

export {AuthenticateController};