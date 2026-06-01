import type {
	TextFieldSupportingTextConfig,
	TextFieldSupportingTextConfigs
} from "../types/text-field-props-supporting-text-config.type";

/**
 * Compare two objects of type {@link TextFieldSupportingTextConfig} and check if all values are equal
 * @param value1
 * @param value2
 */
function isTextFieldSupportingTextConfigEqual(
	value1: TextFieldSupportingTextConfig,
	value2: TextFieldSupportingTextConfig
): boolean {
	return (
		(
			!value1 &&
			!value2
		) ||
		(
			!!value1 &&
			!!value2 &&
			value1.id === value2.id &&
			value1.isErrored === value2.isErrored &&
			value1.text === value2.text
		)
	);
}

/**
 * Compare two collections of objects of type {@link TextFieldSupportingTextConfig} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isTextFieldSupportingTextConfigsEqual(
	value1: TextFieldSupportingTextConfigs,
	value2: TextFieldSupportingTextConfigs
): boolean {

	if (value1.length !== value2.length) return false;

	for (let i = 0; i < value1.length; i++) {
		if (isTextFieldSupportingTextConfigEqual(value1[i], value2[i])) return false;
	}

	return true;
}
