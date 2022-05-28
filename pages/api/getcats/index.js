export default async function handler(req, res) {
	const { page, limit } = req.query;
	const api_key = process.env.API_KEY;
	const response = await fetch(
		`https://api.thecatapi.com/v1/images/search?limit=${
			limit ? limit : 5
		}&page=${page ? page : 0}&order=desc`,
		{
			headers: {
				"x-api-key": api_key,
			},
		}
	);
	if (response.status != 200) {
		return res.status(404);
	}
	const count = response.headers.get("pagination-count");
	const data = await response.json();
	return res.status(200).json({ data, count: count });
}
