export async function formatLoop (items, fields) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { formatItem } = await import("./formatItem.js");

	// ---------------

	if (await errorHandle("status")) {

		const newResult = {};
		let index = 0;

		for await (const key of Object.keys(items)) {

			const value = items[key];

			if (value !== undefined) {
				newResult[`object${index}`] = await formatItem(value, fields);
			}

			else {
				await errorHandle(7609, "formatLoop");
				return false;
			}

			index++;

		}

		return newResult;

	}

	else {
		await errorHandle(6339, "formatLoop");
		return false;
	}

}