import { createContext } from "react";

const initialContext = {
	favourites: [],
	addToFavourites: () => null,
	removeFromFavourites: () => null,
};

export default createContext(initialContext);
