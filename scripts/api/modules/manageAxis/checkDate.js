export async function checkDate (nameValue, itemValue, nameTable) {

	const { patterns } = await import("../../../shared/manageRegex.js");
	const { isNully } = await import("../../../shared/condition/isNully.js");
	const { patternTest } = await import("../../../shared/patternTest.js");

	// ---------------

	if (await isNully(itemValue)) {
		return "No Value";
	}

	else {
		itemValue = String(itemValue);
	}

	switch (nameValue) {

		// date0
		case nameTable.children.item2.name.altName:

		// datef
		case nameTable.children.item4.name.altName: {
			const formatTime = itemValue.replace(patterns.pattern6, "");
			return await patternTest(formatTime, "pattern7", 6776, "checkDate");
		}

		// MJD0
		case nameTable.children.item3.name.altName:

		// MJDF
		case nameTable.children.item5.name.altName: {
			return await patternTest(itemValue, "pattern9", 3903, "checkDate");
		}

	}

}