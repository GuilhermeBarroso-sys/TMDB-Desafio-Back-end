import { DB } from "../database/prisma";
import { sign } from 'jsonwebtoken';
import bcrypt from "bcrypt";
interface IAuthenticateService {
	email: string;
	password: string;
}
class AuthenticateService {
	async execute({email,password} : IAuthenticateService) {
		if(!email || !password) {
			throw new Error("400");
		}
		const user = await DB.user.findFirst({
			where: {
				email
			}
		});
		if(!user) {
			throw new Error("404");
		}
		const correctPassword = bcrypt.compareSync(password, user.password);
		if(!correctPassword) {
			throw new Error("401");
		}
		delete user.password;
		const token = sign(
			{
				user
			},
			process.env.JWT_SECRET,
			{
				subject: user.id,
				expiresIn: "999d"
			}
		);
		return {user, token};
	}
}

export { AuthenticateService };