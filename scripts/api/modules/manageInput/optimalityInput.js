export async function optimalityInput (optimalityValue) {

	const { spaceFormat } = await import("../../../shared/spaceFormat.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { patternTest } = await import("../../../shared/patternTest.js");

	// ---------------

	const characterCheck = await patternTest(optimalityValue, "pattern9", 4806, "optimalityInput");

	if (characterCheck) {

		const formatValue = (await spaceFormat(String(characterCheck), "singleSpace")).toLowerCase();

		if (formatValue) {

			if (Number(formatValue) >= 1 && Number(formatValue) <= 6) {
				return formatValue;
			}

			else {
				await errorHandle(3380, "optimalityInput");
				return false;
			}

		}

		else {
			await errorHandle(3052, "optimalityInput");
			return false;
		}

	}

	else {
		await errorHandle(2676, "optimalityInput");
		return false;
	}

}