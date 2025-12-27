
import operationAxis from "./operationAxis_bundled.js";

// ---------------

const apiConfig = {
	"amount": "2",
	"optimality": "4",
	"timespan": "2"
};

const result = await operationAxis(apiConfig);

console.log(result);