import React from "react";

export default function Button({ text, onClick, loading }) {
	return (
		<button
			className="w-32 h-12 border border-black bg-gradient-to-r text-sm font-bold from-zinc-200 to-red-200 rounded-xl"
			onClick={onClick}
		>
			{loading ? "Loading..." : text}
		</button>
	);
}
