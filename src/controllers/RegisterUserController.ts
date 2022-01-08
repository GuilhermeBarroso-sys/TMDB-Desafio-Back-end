import { Request, Response } from "express";
import { RegisterUserService } from "../services/RegisterUserService";

class RegisterUserController {
	async handle(request: Request, response: Response) {
		const {name,email,password} = request.body;
		const registerUserService = new RegisterUserService();
		try {
			const user = await registerUserService.execute({name,email,password});
			return response.status(200).json(user);
		} catch(error) {
			const status = error.message;
			if(status == "409") {
				return response.status(409).json("Email Already Exists!");
			} 
			else if(status == "400") {
				return response.status(400).json("Missing required fields!");
			}
		}
	}
}

export { RegisterUserController };