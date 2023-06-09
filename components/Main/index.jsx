import { useState } from "react";
import QRReader from "./QRReader";
import PassVerification from "./PassVerification";
import Profile from "./Profile";
import Invalid from "./Invalid";

export default function Main({ current, setcurrent }) {
	const [studentData, setstudentData] = useState(null);

	return (
		<div className="w-full h-full">
			{current === "verification" ? (
				<PassVerification
					setcurrent={setcurrent}
					setstudentData={setstudentData}
				/>
			) : current === "profile" ? (
				<Profile studentData={studentData} setcurrent={setcurrent}/>
			) : current === "invalid" ? (
				<Invalid setcurrent={setcurrent}/>
			) : (
				current === "qr" && (
					<QRReader setstudentData={setstudentData} setcurrent={setcurrent} />
				)
			)}
		</div>
	);
}
