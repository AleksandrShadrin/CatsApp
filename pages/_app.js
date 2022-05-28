import Header from "../components/Header";
import "../styles/globals.css";
import FavouriteContext from "../utilities/FavouriteContext";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
	const [favourites, setFavourites] = useState([]);
	const addToFavourites = (id, imageUrl) => {
		setFavourites((prevState) => [...prevState, { id, imageUrl }]);
	};
	const removeFromFavourites = (id) => {
		setFavourites((prevState) =>
			prevState.filter((entity) => entity.id != id)
		);
	};
	return (
		<FavouriteContext.Provider
			value={{ favourites, addToFavourites, removeFromFavourites }}
		>
			<Header />
			<Component {...pageProps} />
		</FavouriteContext.Provider>
	);
}

export default MyApp;
