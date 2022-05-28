import { useState, useEffect } from "react";
import NumBlock from "./NumBlock";

const Pagination = ({ currentPage, pagesCount, newPage, className }) => {
	const pageNumerate = [-1, 0, 1, 2, 3];
	const [pagesNum, setPagesNum] = useState([]);
	useEffect(() => {
		setPagesNum(pageNumerate.map((entity) => entity + currentPage));
	}, [currentPage]);
	const clickHandler = (num) => {
		return (e) => {
			newPage(num);
		};
	};
	return (
		<div
			className={`flex justify-between max-w-md mx-auto py-4 ${className}`}
		>
			<NumBlock
				current={currentPage === 0}
				num={0}
				onClick={clickHandler(0)}
			/>
			{pagesNum.map((entity) =>
				pagesCount - entity > 0 && entity > 0 ? (
					<NumBlock
						current={currentPage === entity}
						key={entity}
						num={entity}
						onClick={clickHandler(entity)}
					/>
				) : (
					""
				)
			)}
			<NumBlock num={"..."} />
			{currentPage === pagesCount ? (
				<NumBlock current={true} num={pagesCount} />
			) : (
				<NumBlock num={pagesCount} onClick={clickHandler(pagesCount)} />
			)}
		</div>
	);
};
export default Pagination;
