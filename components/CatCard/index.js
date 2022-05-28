/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import FavouriteContext from "../../utilities/FavouriteContext";

const CatCard = ({ id, imageUrl, breed }) => {
	const context = useContext(FavouriteContext);
	const likeAble = !context.favourites.find((entity) => entity.id === id);
	const removeAble = !likeAble;

	return (
		<div className="flex flex-col items-center min-w-fit max-w-full mx-auto rounded-t-lg overflow-hidden border-slate-400 border-[1px] divide-y-2 divide-slate-600 cursor-pointer">
			<div className="h-48 overflow-hidden max-w-full ">
				<img
					className="object-cover transition-all h-full hover:scale-110 "
					width={500}
					height={400}
					src={imageUrl}
					alt={breed ? breed : "unknown"}
				/>
			</div>
			<p className="w-full text-center text-white py-4 flex  gap-4 items-center justify-center">
				{likeAble && (
					<button
						onClick={() => context.addToFavourites(id, imageUrl)}
						className="px-4 py-2 text-xl font-bold bg-green-400 rounded-full w-32 hover:bg-green-500"
					>
						Like
					</button>
				)}
				{removeAble && (
					<button
						onClick={() => context.removeFromFavourites(id)}
						className="px-4 py-2 text-xl font-bold bg-rose-400 hover:bg-rose-500 rounded-full w-32"
					>
						Remove
					</button>
				)}
			</p>
		</div>
	);
};
export default CatCard;
