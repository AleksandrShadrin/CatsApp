const NumBlock = ({ num, current, onClick }) => {
	const clickAble = num != "..." && !current;
	return (
		<div
			className={`text-xl border-2 shadow-md rounded-lg font-bold max-w-fit py-2 px-4 ${
				current ? "bg-blue-300 shadow-blue-400" : ""
			} ${clickAble ? "cursor-pointer hover:bg-blue-400" : ""}`}
			onClick={onClick}
		>
			{num}
		</div>
	);
};
export default NumBlock;
