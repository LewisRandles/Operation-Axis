export async function getAxis (axis) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { fetchAxis } = await import("../../components/fetchAxis.js");
	const { sendProcess } = await import("../sendProcess.js");
	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");
	const { axisNames } = await import("./axisNames.js");
	const { formatLoop } = await import("./formatLoop.js");
	const { objectLoop } = await import("../manageProcess/objectLoop.js");

	// ---------------

	if (!errorHandle("status")) { return false; }

	const getModeValue = await fetchAxis(axis);

	if (getModeValue) {

		const returnValue = await formatLoop(getModeValue.data, getModeValue.fields);

		if (await conditionCheck(returnValue, "object")) {

			const getAmount = await objectLoop(returnValue);

			const itemStorage = {

				"axis": {
					"type": "object",
					"value": returnValue
				},

				"amount": {
					"type": "number",
					"value": getAmount
				},

				"name": {
					"type": "object",
					"value": axisNames
				}

			};

			const getProcess = await sendProcess(itemStorage);

			if (getProcess) {

				const getValues = getModeValue.md_constraints;

				if (getValues) {

					const axis = {
						"data": getProcess,
						"limit": getValues.crit,
						"crit": getValues.lim,
						"year": getValues.year
					};

					return axis;

				}

			}

			else {
				await errorHandle(5645, "getAxis");
				return false;
			}

		}

		else {
			await errorHandle(2619, "getAxis");
			return false;
		}

	}

	else {
		await errorHandle(5654, "getAxis");
		return false;
	}

}