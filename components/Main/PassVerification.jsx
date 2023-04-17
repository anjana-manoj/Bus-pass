import { useRef, useState } from "react";

import { fetchBusPass } from "../../helper/apiHelper";

import Button from "../Button";

export default function PassVerification({ setcurrent, setstudentData }) {
	const inputRef = useRef();

	const [loading, setloading] = useState(false);
	const [error, seterror] = useState({ type: false, message: null });

	// open qr code scanner page
	function handleQRClick() {
		setcurrent("qr");
	}

	function handleSubmit() {
		const passId = inputRef.current.value;
		if (passId === "") {
			seterror({ type: true, message: "Pass ID required" });
			return;
		}
		fetchBusPass(passId, setstudentData, setcurrent, setloading, seterror);
	}

	return (
		<div className="flex flex-col items-center space-y-16  h-full py-10">
			<h1 className="text-5xl underline underline-offset-1 uppercase font-extrabold">
				Verify Your&nbsp;
				<span className="text-red-500 underline underline-offset-1">Pass</span>
			</h1>

			<div className="flex flex-col w-full px-4 space-y-12 items-center">
				<div className="flex justify-between items-center space-x-4">
					<input
						ref={inputRef}
						className="bg-white outline-none rounded-xl px-4 h-12 w-32 text-sm placeholder:text-red-300 font-bold"
						placeholder="Pass ID"
					/>
					<h1 className="text-4xl text-red-500 font-bold">OR</h1>
					<Button text="Scan Your QR" onClick={handleQRClick} />
				</div>
				<div className="flex flex-col justify-center items-center space-y-2">
					<Button text="Submit" onClick={handleSubmit} loading={loading} />
					{error.type && <p className="text-red-500"> {error.message}</p>}
				</div>
			</div>
		</div>
	);
}
