import bcrypt from 'bcrypt';
import { DB } from '../database/prisma';
interface IRegisterUserService {
	name: string;
	email: string;
	password: string;
}
class RegisterUserService {
	async execute({name,email,password} : IRegisterUserService) {
		if(!name || !email || !password) {
			throw new Error("400");
		}
		const AlreadyExists = await DB.user.findFirst({
			where: {
				email
			}
		});
		if(AlreadyExists) {
			throw new Error("409");
		}
		const hashPassword = bcrypt.hashSync(password, 10); 
		const user = await DB.user.create({
			data: {
				name,
				email,
				password: hashPassword
			}
		});
		return user;
	}
}

export {RegisterUserService};