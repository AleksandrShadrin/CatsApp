const getAllCats = async (page, limit) => {
	const response = await fetch(`api/getcats?page=${page}&limit=${limit}`);
	if (response.status === 200) return await response.json();
	throw new Error("Cats wasn' found");
};

export default getAllCats;
