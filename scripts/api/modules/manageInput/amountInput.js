export async function amountInput (amountValue) {

	const { spaceFormat } = await import("../../../shared/spaceFormat.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { patternTest } = await import("../../../shared/patternTest.js");

	// ---------------

	const characterCheck = await patternTest(amountValue, "pattern9", 2482, "amountInput");

	if (characterCheck) {

		const formatValue = (await spaceFormat(String(characterCheck), "singleSpace")).toLowerCase();

		if (formatValue) {

			if (Number(formatValue) >= 1 && Number(formatValue) <= 200) {
				return formatValue;
			}

			else {
				await errorHandle(6433, "amountInput");
				return false;
			}

		}

		else {
			await errorHandle(2764, "amountInput");
			return false;
		}

	}

	else {
		await errorHandle(8767, "amountInput");
		return false;
	}

}