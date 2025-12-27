export async function checkFlag (nameValue, itemValue, nameTable) {

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

		// class
		case nameTable.children.item11.name.altName:

		// neo
		case nameTable.children.item14.name.altName:

		// pha
		case nameTable.children.item15.name.altName: {
			return await patternTest(itemValue, "pattern4", 1317, "checkFlag");
		}

	}

}