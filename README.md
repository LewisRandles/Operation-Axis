<div align="center"> <img width="300px" src="https://github.com/LewisRandles/Operation-Axis/blob/f95dc3545c83bc0aa64658de390b2221180b0f4a/OPERATION%20AXIS.png"> </div>

<h1 align="center">Operation Axis API Repacker</h1>

<p align="center">Explore mission design possibilities for reaching asteroids and comets.</p>

<div align="center"> <img src="https://img.shields.io/badge/Release-V1.0-2EA44F?style=for-the-badge" alt="Badge"> <img src="https://img.shields.io/badge/maintained-yes-2EA44F?style=for-the-badge" alt="Badge"> <img src="https://img.shields.io/badge/Uncompressed-39.7%20kb-007ec6?style=for-the-badge" alt="Badge"> <img src="https://img.shields.io/badge/compressed-29.1%20kb-007ec6?style=for-the-badge" alt="Badge"> <img src="https://img.shields.io/badge/Licence-MIT-007ec6?style=for-the-badge" alt="Badge"> </div>

<br>

# Introduction

Operation Axis is a free, no-auth, user-friendly API library that provides access to NASA JPL small-body mission design data. This project makes it easy to explore potential spacecraft routes to asteroids and comets. It’s designed for everyone from space enthusiasts and students to educators and mission planners who want to explore mission possibilities and timelines without complex software or specialized expertise.

<br>
 
# Table of Contents

- [Downloading](#downloading)
	- [Different Versions](#different-versions)
	- [Download Page](#download-page)
- [Installing](#installing)
	- [In your JavaScript file](#in-your-javascript-file)
- [Usage](#usage)
	- [No Parameters](#no-parameters)
	- [First Parameter](#first-parameter)
	- [Second Parameter](#second-parameter)
	- [Third Parameter](#third-parameter)
- [Processing](#processing)
	- [Normalisation](#normalisation)
	- [Sanitization](#sanitization)
 - [Customisation](#customisation)
	- [Parent Names](#parent-names)
	- [Child Names](#child-names)
- [Demo](#demo)
	- [Live Demo](#live-demo)
- [Authors](#authors)
- [Credit](#credit)
- [License](#license)

<br>

# Downloading

### Different Versions
Each release provides two configuations of the project.

 - The bundled, minified format known as "production".
 - The unbundled, unminified format known as "development".

### Download Page
[https://github.com/LewisRandles/Operation-Axis/releases](https://github.com/LewisRandles/Operation-Axis/releases)

<br>

# Installing

### In your JavaScript file

```javascript

	// Using the unbundled version needs to be kept with the internal files.
	import operationAxis from './scripts/operationAxis_bundled.js';

	// Using the bundled version is standalone and has no internal files.
	import operationAxis from './operationAxis_unbundled.js';

```

<br>

# Usage

### No Parameters

Providing no parameters will result in the default information being set.

```javascript
await operationAxis();
```

<br>

### First Parameter

The first parameter is providing the desired `amount` within the supported range.

| First Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `amount` | `string` | Supports a valid `amount` from `1` to `200`. |

| Usage | Type | Description |
| :-------- | :------- | :------------------------- |
| `amount` | `string` |  `amount` decides the number of records to be retrieved form the SBDB. |

```javascript

// Argument object.
await operationAxis({"amount": "2"});

```

```javascript

// External object.
const apiConfig = {
	"amount": "2"
}

await operationAxis(apiConfig);

```

<br>

### Second Parameter
The second parameter is providing the desired `optimality` within the supported range.

| Second Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `optimality` | `string` | Supports a valid `optimality` from `1` to `6`. |

| Usage | Type | Description |
| :-------- | :------- | :------------------------- |
| `optimality` | `string` | `optimality` decides the missiom profile. |

```javascript

// Argument object.
await operationAxis({"amount": "2", "optimality": "4"});

```

```javascript

// External object.
const apiConfig = {
	"amount": "2",
	"optimality": "4"
}

await operationAxis(apiConfig);

```

<br>

### Third Parameter
The third parameter is providing the desired `timespan` within the supported range.

| Third Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `timespan` | `string` | Supports a valid `timeapan` from `1` to `20`. |

| Usage | Type | Description |
| :-------- | :------- | :------------------------- |
| `timespan` | `string` | `timespan` decides the launch year or list of launch years. |

```javascript

// Argument object.
await operationAxis({"amount": "2", "optimality": "4", "timespan": "2"});

```

```javascript

// External object.
const apiConfig = {
	"amount": "2",
	"optimality": "4",
	"timespan": "2"
}

await operationAxis(apiConfig);

```

<br>

# Processing

### Normalisation
During normalization, raw API fields such as `["(2025 UV7)", "2025-10-29", 60977]` are combined with the corresponding `fields` array to produce structured objects such as `"object0": { "name": "(2025 UV7)", "date0": "2025-10-29", "MJD0": 60977 };`. Objects provide more reliable and consistent access than arrays while enabling easier manipulation and processing of nested data structures. Nested objects are flattened, redundant metadata and overlapping identifiers are removed, empty or missing fields are normalized, boolean and encoded values are standardized, and all data is organized into a uniform, consistent key-value JSON structure to produce a clean and predictable final result.

### Sanitization
During sanitization, instead of leaving object values as `null` or `undefined`, missing or empty fields are filled with a placeholder such as `"no value"` to ensure that every key in the final result has a valid string; this prevents errors in downstream processing, makes the dataset fully predictable, and allows client applications to safely read and display all values without additional null checks.

<br>

# Customisation
This JSON serves as a configuration layer that lets you enable or disable individual parent and child fields and rename them through `altName`, giving you full control over which properties appear in the final output. Some values from the raw API return are intentionally omitted because they are considered unnecessary or not useful.

### Parent Names
The parents group defines the top-level fields that can be enabled, disabled, or renamed, allowing you to control which main object properties appear in the output.

```javascript

"parents": {

	"item1": {
		"name": {
			"original": "defaultName",
			"altName": "customName"
		},
		"used": true
	},

	...

}

```

### Child Names
The children group manages the nested fields within those parent objects, giving similar control over which sub-properties are included and how they are labeled.

```javascript

"children": {
	
	"item1": {
		"name": {
			"original": "defaultName",
			"altName": "customName"
		},
		"used": true,
		"validate": "checkName"
	},

	...

}

```

<br>

# Demo

### Live Demo
Try the hosted demo via [GitHub Pages Demo](https://lewisrandles.github.io/Operation-Axis)

<br>

# Authors

- [@LewisRandles](https://www.github.com/LewisRandles)


<br>

# Credit

 - For NASA's API information, the [Small Bodies API](https://ssd-api.jpl.nasa.gov/doc/mdesign.html)
 - For CorsProxy's information, the [CorsProxy API](https://corsproxy.io)

<br>

# License

[MIT License](https://github.com/LewisRandles/Operation-Axis/blob/main/LICENSE)
