export async function timespanInput (timespanInput) {

	const { spaceFormat } = await import("../../../shared/spaceFormat.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { patternTest } = await import("../../../shared/patternTest.js");

	// ---------------

	const characterCheck = await patternTest(timespanInput, "pattern9", 1980, "timespanInput");

	if (characterCheck) {

		const formatValue = (await spaceFormat(String(characterCheck), "singleSpace")).toLowerCase();

		if (formatValue) {

			if (Number(formatValue) >= 0 && Number(formatValue) <= 20) {

				const currentYear = (new Date).getFullYear();

				let yearIndex = 0;
				const addYears = await Promise.all(new Array(Number(formatValue)).fill(null).map(async () => { yearIndex++; return [currentYear + yearIndex]; }));

				return [currentYear].concat(addYears).flat(1).join(",");
			
			}

			else {
				await errorHandle(8174, "timespanInput");
				return false;
			}

		}

		else {
			await errorHandle(5826, "timespanInput");
			return false;
		}

	}

}