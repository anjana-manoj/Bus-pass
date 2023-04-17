import "../styles/globals.css";
import { Saira_Condensed } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const font = Saira_Condensed({ subsets: ["latin"], weight: "500" });

function MyApp({ Component, pageProps }) {
	return (
		<div className={font.className}>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
