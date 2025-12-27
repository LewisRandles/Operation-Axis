export async function checkName (nameValue, itemValue, nameTable) {

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

		// name
		case nameTable.children.item1.name.altName: {
			return await patternTest(itemValue, "pattern10", 2516, "checkName");
		}

		// pdes
		case nameTable.children.item17.name.altName: {
			return await patternTest(itemValue, "pattern5", 1304, "checkName");
		}

	}

}