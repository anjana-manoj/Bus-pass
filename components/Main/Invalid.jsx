import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function Invalid() {
	return (
		<div className="flex flex-col items-center space-y-10  h-full  pb-4">
			<AiOutlineQuestionCircle className="w-32 h-32 text-black" />
			<div className="bg-red-500 border-2 border-black px-16 py-2 rounded-xl text-white font-bold">
				<h3 className="uppercase text-2xl">Invalid Bus Pass</h3>
			</div>
			<h1 className="text-9xl text-red-500">X</h1>
		</div>
	);
}
