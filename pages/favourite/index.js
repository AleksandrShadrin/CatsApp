const { default: CatCard } = require("../../components/CatCard");
const { default: Pagination } = require("../../components/Pagination");
import { useContext } from "react";
import FavouriteContext from "../../utilities/FavouriteContext";

const Favourite = () => {
	const context = useContext(FavouriteContext);
	return (
		<div className="">
			<div className="grid grid-cols-1 gap-4 mx-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{context.favourites &&
					context.favourites.map((entity) => (
						<CatCard
							id={entity.id}
							key={entity.id}
							imageUrl={entity.imageUrl}
						/>
					))}
			</div>
		</div>
	);
};

export default Favourite;
