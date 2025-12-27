export default async function operationAxis (apiConfig) {

	const { getAPI } = await import("./api/getAPI.js");
	const { conditionCheck } = await import("./shared/condition/conditionCheck.js");
	const { baseInput } = await import("./api/modules/manageInput/baseInput.js");
	const { errorHandle } = await import("./shared/manageError/errorHandle.js");
	const { resultValue } = await import("./shared/resultValue.js");
	const { errorStatus } = await import("./shared/manageError/errorStatus.js");
	const { initialValue } = await import("./shared/initialValue.js");

	// ---------------

	const initialCheck = await initialValue(apiConfig);

	if (await conditionCheck(initialCheck, "object")) {

		const selectedConfig = await baseInput(initialCheck);

		if (!await errorHandle("status")) { return false; }

		if (selectedConfig) {

			const apiValue = await getAPI(selectedConfig);

			if (apiValue) {
				return await resultValue(apiValue);
			}

			else {
				await errorHandle(5548, "operationAxis");
				return await resultValue(errorStatus.lastError);
			}

		}

		else {
			await errorHandle(8873, "operationAxis");
			return await resultValue(errorStatus.lastError);
		}

	}

	else {
		await errorHandle(9324, "operationAxis");
		return await resultValue(errorStatus.lastError);
	}

}