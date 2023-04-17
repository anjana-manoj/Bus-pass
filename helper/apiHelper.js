import axios from "axios";

export function fetchBusPass(
	id,
	setstudentData,
	setcurrent,
	setloading,
	seterror
) {
	seterror({ type: false, message: null });
	setloading(true);
	axios
		.post(
			"https://app.conext.in/bus_pass/checker/",
			{ pass_id: id },
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}
		)
		.then((response) => {
			setstudentData(response?.data);
			if (response?.data?.Bus_Pass === "No Such Pass Alloted") {
				setcurrent("invalid");
			} else {
				setcurrent("profile");
			}
		})
		.catch(() => {
			seterror({ type: true, message: "Something went wrong" });
			setcurrent("verification");
		})
		.finally(() => setloading(false));
}
