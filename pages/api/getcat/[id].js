export default async function handler(req, res) {
	const { image_id } = req.query;
	const api_key = process.env.API_KEY;
	const response = await fetch(
		`https://api.thecatapi.com/v1/images/${image_id}`,
		{
			headers: {
				"x-api-key": api_key,
			},
		}
	);
	if (response.status != 200) {
		return res.status(404);
	}
	const data = await response.json();
	return res.status(200).json({ data });
}
