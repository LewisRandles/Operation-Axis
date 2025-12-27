export async function manageAxis (axis) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { getAxis } = await import("./getAxis.js");

	// ---------------

	if (!errorHandle("status")) { return false; }

	const getAxisValue = await getAxis(axis);

	if (getAxisValue) {
		return getAxisValue;
	}

	else {
		await errorHandle(1342, "manageAxis");
		return false;
	}

}