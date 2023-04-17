import { useRef, useState, useEffect } from "react";
import QrScanner from "qr-scanner";

import { fetchBusPass } from "../../helper/apiHelper";

export default function QRReader({ setcurrent, setstudentData }) {
	const videoRef = useRef();

	const [loading, setloading] = useState(false);
	const [error, seterror] = useState({ type: false, message: null });

	useEffect(() => {
		const qrScanner = new QrScanner(
			videoRef.current,
			(result, e) => {
				fetchBusPass(
					result?.data,
					setstudentData,
					setcurrent,
					setloading,
					seterror
				);
				qrScanner.stop();
			},
			{
				highlightScanRegion: true,
			}
		);
		qrScanner.start();

		return () => {
			qrScanner.destroy();
		};
	}, []);

	return (
		<div className="flex flex-col justify-center w-full h-full">
			<nav className="flex p-4 text-lg font-bold">
				<p onClick={() => setcurrent("verification")}>Home</p>
			</nav>
			{loading ? (
				<p className="w-full h-full">Loading...</p>
			) : (
				<video ref={videoRef} className="w-full h-full" />
			)}
		</div>
	);
}
