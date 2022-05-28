import Link from "next/link";

const Header = () => {
	return (
		<header className="flex text-2xl font-bold py-4 px-8 bg-yellow-500 text-white mb-12 justify-between">
			<Link href="/" passHref>
				<a className="h-full">Cats</a>
			</Link>
			<Link href="/favourite" passHref>
				<a className="h-full">My Favourite Cats</a>
			</Link>
		</header>
	);
};

export default Header;
