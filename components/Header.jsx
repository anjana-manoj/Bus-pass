export default function Header({ setcurrent }) {
	return (
		<div className="bg-[url(/bg.png)] w-full h-96 p-6 bg-cover bg-no-repeat flex flex-col space-y-14 ">
			<div className="flex justify-between text-white">
				<nav className="font-bold">
					<p onClick={() => setcurrent("verification")}>Home</p>
				</nav>
				<img src="/logo.png" className="scale-110" />
			</div>

			<div className="flex flex-col text-white font-bold space-y-2">
				<h1 className="text-6xl">BUSTODAY</h1>
				<h3 className="text-3xl text-red-500 uppercase">-Travel More-</h3>
			</div>
		</div>
	);
}
