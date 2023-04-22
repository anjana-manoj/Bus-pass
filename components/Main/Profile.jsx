import { BsCheckCircle } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import Button from "../Button";

export default function Profile({ setcurrent,studentData }) {
	console.log(studentData)
	return (
		<div className="flex flex-col items-center space-y-8  h-full  pb-4">
			<div className="flex flex-col space-y-2 w-full justify-center items-center">
				<div className="w-24 h-24 border rounded-full  flex justify-center items-center border-black">
					<img src="/profile.png" className="w-20 h-20" />
				</div>

				<div className="flex justify-center w-10/12 px-4 items-center bg-slate-300 text-center rounded-xl py-2">
					<div className="flex flex-col font-thin w-2/5">
						<p>Name</p>
						<p>Pass ID</p>
						<p>YEAR OF JOIN</p>
						<p>BOARDING PLACE</p>
						<p>VALID TILL</p>
						
					</div>
					<div className="h-full w-1/5 flex justify-center items-center">
						<div className="bg-red-500 w-0.5 h-full" />
					</div>
					<div className="flex flex-col font-thin w-2/5">
						<p>{studentData.student.student_name}</p>
						<p>{studentData.student.pass_id}</p>
						<p>{studentData.student.year_of_join}</p>
						<p>{studentData.student.boarding_place===null?"nill":studentData.student.boarding_place}</p>
						<p>{studentData.student.valid_till}</p>
						
					</div>					
				</div>
				
			</div>

			<div className="flex flex-col space-y-4 w-full justify-center items-center">
				<div className="bg-red-500 border-2 border-black px-16 py-2 rounded-xl text-white font-bold">
					<h3 className="uppercase text-2xl">
						{studentData.Bus_Pass === "Pass Expired"
							? "Bus Pass Expired"
							: "Valid Bus Pass"}
					</h3>
				</div>
				{studentData.Bus_Pass === "Pass Expired" ? (
					<BiErrorCircle className="w-20 h-20 text-red-500" />
				) : (
					<BsCheckCircle className="w-20 h-20 text-green-500" />
				)}
			</div>
			<div className="flex space-x-6 py-10 ">
				<Button text="Scan Again" onClick={()=>{
				setcurrent('qr')
				}}/>
				<Button text="cancel" onClick={()=>setcurrent('verification')}/>
			</div>
			
			
		</div>
	);
}
