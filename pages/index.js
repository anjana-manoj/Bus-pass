import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
	const [current, setcurrent] = useState("verification");

	return (
		<div className="bg-zinc-200 w-screen min-h-screen h-screen flex flex-col justify-between">
			{current !== "qr" && <Header setcurrent={setcurrent} />}
			<Main current={current} setcurrent={setcurrent} />
			
			{current === "verification" && <Footer />}
		</div>
	);
}
