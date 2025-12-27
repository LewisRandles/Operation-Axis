export async function fetchAxis (axis) {

	const { conditionCheck } = await import("../../shared/condition/conditionCheck.js");
	const { errorHandle } = await import("../../shared/manageError/errorHandle.js");
	const { attemptFetch } = await import("../modules/attemptFetch.js");

	// ---------------

	if (await conditionCheck(axis, "object")) {

		const amount = axis.amount;
		const optimality = axis.optimality;
		const year = axis.timespan;

		const axisURL = `https://ssd-api.jpl.nasa.gov/mdesign.api?lim=${amount}&crit=${optimality}&year=${year}&sb-group=neo`;

		const proxyURL = "https://corsproxy.io/?url=";

		const fetchURL = encodeURI(proxyURL + axisURL);

		const returnResult = await attemptFetch(fetchURL);

		if (await conditionCheck(returnResult, "object")) {
			return returnResult;
		}

		else {
			await errorHandle("warning", "fetchAxis");
			return false;
		}

	}

	else {
		await errorHandle(1382, "fetchAxis");
		return false;
	}

}