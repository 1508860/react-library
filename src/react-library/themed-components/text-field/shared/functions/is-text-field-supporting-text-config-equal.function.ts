import type {
	TextFieldSupportingTextConfig,
	TextFieldSupportingTextConfigs
} from "../types/text-field-props-supporting-text-config.type";

/**
 * Compare two objects of type {@link TextFieldSupportingTextConfig} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isTextFieldSupportingTextConfigEqual(
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
	if (!value1 && !value2) return true
	if (!!value1 && !!value2 && value1.length === value2.length) {
		for (let value1Index = 0; value1Index < value1.length; value1Index++) {
			if (!value2.find(y => y.id === value1[value1Index].id)) return false;
		}
	}
	return false;
}
