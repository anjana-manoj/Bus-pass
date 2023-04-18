import { AiOutlineQuestionCircle } from "react-icons/ai";
import Button from "../Button";
export default function Invalid({setcurrent}) {
	return (
		<div className="flex flex-col items-center space-y-10  h-full  pb-4">
			<AiOutlineQuestionCircle className="w-32 h-32 text-black" />
			<div className="bg-red-500 border-2 border-black px-16 py-2 rounded-xl text-white font-bold">
				<h3 className="uppercase text-2xl">Invalid Bus Pass</h3>
			</div>
			<h1 className="text-9xl text-red-500">X</h1>
			<div className="flex space-x-6 py-8 ">
			<Button text="Scan Again" onClick={()=>{
				setcurrent('qr')
			}}/>
			<Button text="cancel" onClick={()=>setcurrent('verification')}/>
			</div>
		</div>
	);
}