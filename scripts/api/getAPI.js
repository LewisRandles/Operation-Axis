export async function getAPI (apiConfig) {

	const { manageAxis } = await import("./modules/manageAxis/manageAxis.js");
	const { errorHandle } = await import("../shared/manageError/errorHandle.js");

	// ---------------

	const getAxis = await manageAxis(apiConfig);

	if (!await errorHandle("status")) { return false; }

	return {
		"axis": getAxis
	};

}