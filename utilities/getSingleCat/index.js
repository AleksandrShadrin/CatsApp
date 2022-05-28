const getAllCats = async (id) => {
	const response = await fetch(`api/getcat/${id}`);
	if (response.status === 200) return await response.json();
	throw new Error("Cats wasn' found");
};

export default getAllCats;
