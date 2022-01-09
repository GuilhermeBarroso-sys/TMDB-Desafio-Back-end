import 'dotenv/config';
import express from "express";
import routes from './routes';
const app = express();
import cors from 'cors';
app.use(cors({origin: '*'}));
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT, () => {
	process.env.ENVIRONMENT == 'development' && (
		console.log(`Server is Running on port ${process.env.PORT}`)
	);
});