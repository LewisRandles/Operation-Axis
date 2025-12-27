export async function baseInput (configValue) {

	const { amountInput } = await import("./amountInput.js");
	const { optimalityInput } = await import("./optimalityInput.js");
	const { timespanInput } = await import("./timespanInput.js");
	const { manageBase } = await import("./manageBase.js");

	// ---------------

	const getState = {
		"amount": amountInput,
		"optimality": optimalityInput,
		"timespan": timespanInput
	};

	return await manageBase(configValue, getState);

}