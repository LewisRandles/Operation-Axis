
import operationAxis from "./scripts/operationAxis_unbundled.js";

// ---------------

const apiConfig = {
	"amount": "2",
	"optimality": "4",
	"timespan": "2"
};

const result = await operationAxis(apiConfig);

console.log(result);