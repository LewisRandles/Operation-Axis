export async function formatItem (item, fields) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");

	// ---------------

	if (await errorHandle("status")) {

		const newForm = {};
		let index = 0;

		for await (const key of Object.keys(item)) {

			const value = item[key];

			if (value !== undefined) {
				newForm[fields[index]] = value;
			}

			else {
				await errorHandle(1367, "formatItem");
				return false;
			}

			index++;

		}

		return newForm;

	}

	else {
		await errorHandle(6705, "formatItem");
		return false;
	}

}