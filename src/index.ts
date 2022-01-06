import 'dotenv/config';
import express from "express";
import routes from './routes';
const app = express();
import cors from 'cors';
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3000, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});