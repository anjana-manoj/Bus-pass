import { useRef, useState, useEffect } from "react";
import QrScanner from "qr-scanner";

import { fetchBusPass } from "../../helper/apiHelper";
import Button from "../Button";

export default function QRReader({ setcurrent, setstudentData }) {
	const videoRef = useRef();

	const [loading, setloading] = useState(false);
	const [error, seterror] = useState({ type: false, message: null });
	const [tryagain, settryagain] = useState(false);

	useEffect(() => {
		let qrScanner
		let timeOut
		qrScanner = new QrScanner(
			videoRef.current,
		(result) => {
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
		if(!tryagain){
			qrScanner.start();
			timeOut = setTimeout(() => {
				seterror({type: true, message: 'No detection, Please try again'})
				settryagain(true)
			}, 12000);
		}

		return () => {
			qrScanner && qrScanner.destroy();
			timeOut && clearTimeout(timeOut)
		};
	}, [tryagain]);

	return (
		<div className="flex flex-col justify-center w-full h-full ">
			<nav className="flex p-4 text-lg font-bold">
				<p onClick={() => setcurrent("verification")}>Home</p>
			</nav>
			<div className='flex flex-col w-full h-full justify-center items-center'>

				{loading &&
					<p className="w-full h-full">Loading...</p>
				}
					<video ref={videoRef} className="w-full h-full" />

				{error.type && <p className="w-full h-full text-center">{error.message}</p>}

				{ tryagain && <div className='flex space-x-6 py-8'>
					<Button text="Try Again" onClick={()=> {
						settryagain(false)
						seterror({type: false, message: null})
					}} loading={loading} />
					<Button text="Cancel" onClick={()=> setcurrent('verification')} loading={loading} />
				</div>}
			</div>
		</div>
	);
}