import Link from "next/link";

import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { MdMail } from "react-icons/md";

export default function Footer() {
	return (
		<div className="bg-black w-full h-40 p-6 flex flex-col justify-between text-white">
			<div className="flex justify-between items-center">
				<nav className="font-bold text-xl">
					<Link href="/">Learn More</Link>
				</nav>
				<div className="flex space-x-3 items-center">
					<BsLinkedin className="w-5 h-5" />
					<BsFacebook className="w-5 h-5" />
					<BsInstagram className="w-5 h-5" />
				</div>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex space-x-1 items-center">
					<MdMail className="w-6 h-6" />
					<span className="text-sm">{"bustoday@gmail.com"}</span>
				</div>
				<nav className="text-sm">
					<p>Terms &amp; Conditions</p>
				</nav>
			</div>
		</div>
	);
}
