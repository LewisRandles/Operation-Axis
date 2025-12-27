export async function checkDigit (nameValue, itemValue, nameTable) {

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

		// bin
		case nameTable.children.item16.name.altName:

		// c3_dep
		case nameTable.children.item6.name.altName:

		// condition_code
		case nameTable.children.item13.name.altName:

		// dv_tot
		case nameTable.children.item9.name.altName:

		// h
		case nameTable.children.item12.name.altName:

		// tof
		case nameTable.children.item10.name.altName:

		// vinf_arr
		case nameTable.children.item8.name.altName:

		// vinf_dep
		case nameTable.children.item7.name.altName: {
			return await patternTest(itemValue, "pattern9", 8348, "checkDigit");
		}

	}

}