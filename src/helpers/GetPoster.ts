class GetPoster {
	static handle(poster_path : string) {
		return `${process.env.IMAGE_API}/${poster_path}`;
	}
}

export {GetPoster};